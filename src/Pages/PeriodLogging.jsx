import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { differenceInDays, addDays, format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import Header from '../Components/Header'
import { FaCalendarAlt, FaSpa, FaHeart } from 'react-icons/fa';

const PeriodLogging = () => {
  // User inputs
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [cycleDays, setCycleDays] = useState('');

  // Calculations
  const [periodDuration, setPeriodDuration] = useState(null);
  const [nextPeriodStartDate, setNextPeriodStartDate] = useState(null);
  const [nextPeriodEndDate, setNextPeriodEndDate] = useState(null);
  const [ovulationDate, setOvulationDate] = useState(null);

  // Whenever inputs change, recalculate
  useEffect(() => {
    // Validate dates & cycle length
    if (
      startDate &&
      endDate &&
      endDate >= startDate &&
      cycleDays >= 25 &&
      cycleDays <= 45
    ) {
      // Current period duration
      const duration = differenceInDays(endDate, startDate) + 1;
      setPeriodDuration(duration);

      // Estimate next period start: current start + cycleDays
      const estimatedNextStart = addDays(startDate, Number(cycleDays));
      setNextPeriodStartDate(estimatedNextStart);

      // Estimate next period end by assuming the same duration as current period
      const estimatedNextEnd = addDays(estimatedNextStart, duration - 1);
      setNextPeriodEndDate(estimatedNextEnd);

      // Ovulation ~14 days before the next period start
      const estimatedOvulation = addDays(estimatedNextStart, -14);
      setOvulationDate(estimatedOvulation);
    } else {
      // Reset if data is incomplete/invalid
      setPeriodDuration(null);
      setNextPeriodStartDate(null);
      setNextPeriodEndDate(null);
      setOvulationDate(null);
    }
  }, [startDate, endDate, cycleDays]);

  return (
    <>
    <Header />
    <div className="min-h-screen p-4 md:p-8 pt-24">
      {/* Header Image */}
      {/* <div className="max-w-4xl mx-auto mb-6">
        <img
          src="https://flo.health/cdn-cgi/image/quality=85,format=auto/uploads/media/sulu-750x-inset/07/9507-01_1006x755.jpg"
          alt="Flo Health"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div> */}

      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-pink-500 mb-8">
        Period Logging
      </h1>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Form: Start Date, End Date, Cycle Length */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Start Date */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              <FaCalendarAlt className="inline-block mr-2 text-pink-500" />
              Last Period Start
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="MMMM d, yyyy"
              placeholderText="Select start date"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          {/* End Date */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              <FaCalendarAlt className="inline-block mr-2 text-pink-500" />
              Last Period End
            </label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="MMMM d, yyyy"
              placeholderText="Select end date"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          {/* Cycle Days */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              <FaSpa className="inline-block mr-2 text-pink-500" />
              Cycle Length (25 - 45)
            </label>
            <input
              type="number"
              min="25"
              max="45"
              placeholder="Enter your cycle length"
              value={cycleDays}
              onChange={(e) => setCycleDays(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
        </div>

        {periodDuration && nextPeriodStartDate && nextPeriodEndDate && ovulationDate ? (
          <div className="space-y-6">
            <div className="bg-pink-50 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-pink-600 mb-2 flex items-center">
                Hey Girl <span className="ml-2">🌸</span>
              </h2>
              <p className="text-gray-700 mb-2">
                Your <span className="font-semibold">next period</span> is likely
                to begin on{' '}
                <span className="font-semibold">
                  {format(nextPeriodStartDate, 'MMMM d, yyyy')}
                </span>{' '}
                and end on{' '}
                <span className="font-semibold">
                  {format(nextPeriodEndDate, 'MMMM d, yyyy')}
                </span>
                , lasting around{' '}
                <span className="font-semibold">{periodDuration} days</span>. Make
                sure you have your pads, pain relievers, and other essentials ready!
                Stay hydrated and get plenty of rest to feel your best.
              </p>
            </div>

            {/* Ovulation Info */}
            <div className="bg-pink-50 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-pink-600 mb-2 flex items-center">
                <FaHeart className="mr-2 text-pink-500" />
                Ovulation & Fertility Window
              </h2>
              <p className="text-gray-700 mb-2">
                Your estimated ovulation date is{' '}
                <span className="font-semibold">
                  {format(ovulationDate, 'MMMM d, yyyy')}
                </span>
                . You’re more likely to get pregnant around this date, so keep that
                in mind if you’re planning or avoiding pregnancy.
              </p>
              <p className="text-gray-700 text-sm">
                Remember, every body is unique. This prediction is based on your
                current data and may vary if your cycles are irregular.
              </p>
            </div>
          </div>
        ) : (
          <p className="text-gray-600 text-sm">
            Please select valid dates and enter a cycle length between 25 and 45.
          </p>
        )}
      </div>
    </div>
    </>
  );
};

export default PeriodLogging;
