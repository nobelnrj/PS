import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import "./styles.scss";

const Timer = ({ size, strokeBgColor, strokeColor, strokeWidth, endDate }) => {

  let radius = size / 2;
  let circumference = size * Math.PI;

  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const interval = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = new Date(endDate) - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // update the timer
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      // If the count down is finished in corner cases
      // reset the count to next day, this makes the
      // timer on forever loop
      if (distance < 0) {
        // countDownDate = getNeverEndingDate();
      }
    }, 1000);

    return () => {
      console.log(`clearing interval`);
      setIsPlaying(false);
      clearInterval(interval);
    };
  }, []);

  // const updateTime = () => {
  //   // setIsPlaying(true);
  //   setCountdown(countdown - 1000);
  // }

  const countdownSizeStyles = {
    height: size,
    width: size
  };

  const textStyles = {
    color: strokeColor,
    fontSize: size * 0.3,
    fontWeight: "bold",
  };

  return (
    <div className='timer'>
      <div
        className='timer-container'
        style={Object.assign(
          {},
          countdownSizeStyles
        )}
      >
        <p style={textStyles}>{days}D</p>
        <svg className='timer-svg'>
          <circle
            cx={radius}
            cy={radius}
            r={radius}
            fill="none"
            stroke={strokeBgColor}
            strokeWidth={strokeWidth}
          ></circle>
        </svg>
        <svg className='timer-svg'>
          <circle
            strokeDasharray={circumference}
            // strokeDashoffset={
            //   isPlaying ?  : 0
            // }
            r={radius}
            cx={radius}
            cy={radius}
            fill="none"
            strokeLinecap="round"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          ></circle>
        </svg>
      </div>
      <div
        className='timer-container'
        style={Object.assign(
          {},
          countdownSizeStyles
        )}
      >
        <p style={textStyles}>{hours}h</p>
        <svg className='timer-svg'>
          <circle
            cx={radius}
            cy={radius}
            r={radius}
            fill="none"
            stroke={strokeBgColor}
            strokeWidth={strokeWidth}
          ></circle>
        </svg>
        <svg className='timer-svg'>
          <circle
            strokeDasharray={circumference}
            strokeDashoffset={
              isPlaying ? circumference - (hours / 24) * circumference : 0
            }
            r={radius}
            cx={radius}
            cy={radius}
            fill="none"
            strokeLinecap="round"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          ></circle>
        </svg>
      </div>
      <div
        className='timer-container'
        style={Object.assign(
          {},
          countdownSizeStyles
        )}
      >
        <p style={textStyles}>{minutes}m</p>
        <svg className='timer-svg'>
          <circle
            cx={radius}
            cy={radius}
            r={radius}
            fill="none"
            stroke={strokeBgColor}
            strokeWidth={strokeWidth}
          ></circle>
        </svg>
        <svg className='timer-svg'>
          <circle
            strokeDasharray={circumference}
            strokeDashoffset={
              isPlaying ? circumference - (minutes / 60) * circumference : 0
            }
            r={radius}
            cx={radius}
            cy={radius}
            fill="none"
            strokeLinecap="round"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          ></circle>
        </svg>
      </div>
      <div
        className='timer-container'
        style={Object.assign(
          {},
          countdownSizeStyles
        )}
      >
        <p style={textStyles}>{seconds}s</p>
        <svg className='timer-svg'>
          <circle
            cx={radius}
            cy={radius}
            r={radius}
            fill="none"
            stroke={strokeBgColor}
            strokeWidth={strokeWidth}
          ></circle>
        </svg>
        <svg className='timer-svg'>
          <circle
            strokeDasharray={circumference}
            strokeDashoffset={
              isPlaying ? circumference - (seconds / 60) * circumference : 0
            }
            r={radius}
            cx={radius}
            cy={radius}
            fill="none"
            strokeLinecap="round"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          ></circle>
        </svg>
      </div>
    </div>
  );
}

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  strokeBgColor: PropTypes.string.isRequired,
  strokeColor: PropTypes.string.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  endDate: PropTypes.string.isRequired
};

export default Timer;
