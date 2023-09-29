import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Settings = () => {
  const [theme, setTheme] = useState("light");
  const [primaryColor, setPrimaryColor] = useState(0);
  const [fontsize, setFontSize] = useState(1);
  const [animationSpeed, setAnimationSpeed] = useState(1);

  const [settings, setSettings] = useState({
    "--background-color": "#fff",
    "--background-light": "var(--background-color)",
    "--shadow-color": "rgba(0, 0, 0, 0.2)",
    "--primary-color": "rgb(7, 204, 40)",
    "--text-color": "#0a0a0a",
    "--text-light": "#575757",
    "--font-size": "16px",
    "--animation-speed": 1,
  });

  const themes = [
    {
      "--background-color": "#fff",
      "--background-light": "#fff",
      "--shadow-color": "rgb(0,0,0,0.2)",
      "--text-color": "#0A0A0A",
      "--text-light": "#575757",
    },
    {
      "--background-color": "rgb(29,29,29)",
      "--background-light": "rgb(77,77,77)",
      "--shadow-color": "rgb(0,0,0,0.2)",
      "--text-color": "#ffffff",
      "--text-light": "#eceaea",
    },
  ];
  const primaryColors = [
    "rgb(7, 204, 40)",
    "rgb(225,0,86)",
    "rgb(33,150,2243)",
    "rgb(255,193,7)",
    "rgb(156,39,176)",
  ];
  const fontSizes = [
    {
      title: "Small",
      value: "12px",
    },
    {
      title: "Medium",
      value: "16px",
    },
    {
      title: "Large",
      value: "20px",
    },
  ];
  const animationSpeeds = [
    {
      title: "Slow",
      value: 2,
    },
    {
      title: "Medium",
      value: 1,
    },
    {
      title: "Fast",
      value: 0.5,
    },
  ];

  useEffect(() => {
    const root = document.documentElement;
    for (let key in settings) {
      root.style.setProperty(key, settings[key]);
    }
  }, [settings]);

  const changeTheme = (i) => {
    const _theme = { ...themes[i] };
    setTheme(i === 0 ? "light" : "dark");
    let _settings = { ...settings };
    for (let key in _theme) {
      _settings[key] = _theme[key];
    }
    setSettings(_settings);
  };

  const ChangeColor = (i) => {
    const _color = primaryColors[i];
    let _settings = { ...settings };
    _settings["--primary-color"] = _color;
    setPrimaryColor(i);
    setSettings(_settings);
  };

  const changeFontSize = (i) => {
    const _size = fontSizes[i];
    let _settings = { ...settings };
    _settings["--font-size"] = _size.value;
    setFontSize(i);
    setSettings(_settings);
  };

  const changeAnimationSpeed = (i) => {
    const _speed = animationSpeeds[i];
    let _settings = { ...settings };
    _settings["--animation-speed"] = _speed.value;
    setAnimationSpeed(i);
    setSettings(_settings);
  };

  return (
    <>
      <div className="section d-block">
        <h2>Preferred Theme</h2>
        <div className="options-container">
          <div className="option light" onClick={() => changeTheme(0)}>
            {theme === "light" && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
          <div className="option dark" onClick={() => changeTheme(1)}>
            {theme === "dark" && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="section d-block">
        <h2>Primary Color</h2>
        <div className="options-container">
          {primaryColors.map((color, index) => (
            <div
              className="option light"
              style={{ backgroundColor: color }}
              onClick={() => ChangeColor(index)}
              key={index}>
              {primaryColor === index && (
                <div className="check">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="section d-block">
        <h2>Font Sizes</h2>
        <div className="options-container">
          {fontSizes.map((size, index) => (
            <button
              className="btn"
              onClick={() => changeFontSize(index)}
              key={index}>
              {size.title}
              {fontsize === index && (
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="section d-block">
        <h2>Animatin Speed</h2>
        <div className="options-container">
          {animationSpeeds.map((speed, index) => (
            <button
              className="btn"
              key={index}
              onClick={() => changeAnimationSpeed(index)}>
              {speed.title}
              {animationSpeed === index && (
                <span className="check">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Settings;
