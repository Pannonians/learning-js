import { useEffect, useState } from "react";
import { Dialog } from "@reach/dialog";
import { Tab, Tabs, TabList, TabPanel, TabPanels } from "@reach/tabs";
import "@reach/dialog/styles.css";
import "@reach/tabs/styles.css";
import "../settings/popup.css";
import "../../App.css";

function Settings() {
  const [showModal, setShowModal] = useState(false);
  const open = () => setShowModal(true);
  const close = () => setShowModal(false);
  const [formSubmit, setFormSubmit] = useState(false);
  const [schemeDetails, setSchemeDetails] = useState({
    pomodoroName: "",
    pomodoroDuration: "",
    shortBreakDuration: "",
    longBreakDuration: "",
    longBreakDelay: "",
    autostartPomodoros: true,
    autoStartBreaks: true,
    id: "",
    isActive: false,
  });

  const [allSchemes, setAllSchemes] = useState(() => {
    const savedSchemes = localStorage.getItem("allSchemes");
    if (savedSchemes) {
      return JSON.parse(savedSchemes);
    } else {
      return [];
    }
  });

  useEffect(() => {
    if (formSubmit) {
      handleFormSubmit();
    }
  }, [formSubmit]);
  const handleFormSubmit = () => {
    if (
      schemeDetails.pomodoroName !== "" &&
      schemeDetails.pomodoroDuration !== "" &&
      schemeDetails.shortBreakDuration !== "" &&
      schemeDetails.longBreakDuration !== "" &&
      schemeDetails.longBreakDelay !== ""
    ) {
      setAllSchemes([
        ...allSchemes,
        {
          id: allSchemes.length + 1,
          pomodoroName: schemeDetails.pomodoroName,
          pomodoroDuration: schemeDetails.pomodoroDuration,
          shortBreakDuration: schemeDetails.shortBreakDuration,
          longBreakDuration: schemeDetails.longBreakDuration,
          longBreakDelay: schemeDetails.longBreakDelay,
          autostartPomodoros: schemeDetails.autostartPomodoros,
          autoStartBreaks: schemeDetails.autoStartBreaks,
          isActive: schemeDetails.isActive,
        },
      ]);
      setSchemeDetails({
        pomodoroName: "",
        pomodoroDuration: "",
        shortBreakDuration: "",
        longBreakDuration: "",
        longBreakDelay: "",
        autostartPomodoros: true,
        autoStartBreaks: true,
        id: "",
        isActive: false,
      });
      setFormSubmit(false);
    }
  };

  const addScheme = () => {
    const newItem = [...allSchemes, { ...schemeDetails }];
    localStorage.setItem("allSchemes", JSON.stringify(newItem));
  };

  const removeScheme = (id) => {
    const removeItem = allSchemes.filter((schemeDetails) => {
      return schemeDetails.id !== id;
    });
    setAllSchemes(removeItem);
  };

  useEffect(() => {
    localStorage.setItem("allSchemes", JSON.stringify(allSchemes));
  }, [allSchemes]);

  const handleChange = (e) => {
    setSchemeDetails({
      ...schemeDetails,
      [e.target.name]: e.target.value,
    });
  };

  const activeScheme = (id) => {
    const setFalse = allSchemes.map((item) => {
      return { ...item, isActive: false };
    });
    for (const item of setFalse) {
      if (item.id === id) {
        item.isActive = true;
        break;
      }
    }
    setAllSchemes(setFalse);
    localStorage.setItem("allSchemes", JSON.stringify(allSchemes));
  };

  return (
    <div>
      {" "}
      <button
        type="button"
        className="btn button-settings button-settings:hover"
        onClick={open}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-gear-fill"
          viewBox="0 0 16 16"
        >
          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
        </svg>
        <span className="visually-hidden">Button</span>
      </button>
      <Dialog className="preferences" isOpen={showModal} onDismiss={close}>
        {" "}
        <div className="row">
          <div className="col">
            <hr></hr>
          </div>
          <div className="col">
            <h5 className="layout">PREFERENCES</h5>
          </div>
          <div className="col">
            <hr></hr>
          </div>
        </div>
        <button
          type="button"
          onClick={close}
          className="closeButton close-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            class="bi bi-x-square "
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
        <Tabs>
          {" "}
          <TabList className="tabsnav">
            {" "}
            <Tab>Timer settings</Tab> <Tab>Application</Tab>{" "}
          </TabList>{" "}
          <TabPanels>
            {" "}
            <TabPanel>
              {" "}
              <div>
                {" "}
                <div className="row">
                  {" "}
                  <div className="col">
                    <h5 style={{ paddingBottom: 20 }}>
                      Create pomodoro scheme:
                    </h5>
                  </div>
                </div>
                <form className="row g-2 settings">
                  <div className="row">
                    {" "}
                    <div className="col">
                      {" "}
                      <label className="form-label">Pomodoro name:</label>{" "}
                    </div>{" "}
                    <div className="col">
                      <input
                        className="settingsInput settingsInput:focus"
                        type="text"
                        id="pomodoroName"
                        name="pomodoroName"
                        value={schemeDetails.pomodoroName}
                        placeholder="Pomodoro name"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <br></br>
                  </div>
                  <div className="row ">
                    {" "}
                    <div className="col">
                      {" "}
                      <label className="form-label">
                        Pomodoro duration:
                      </label>{" "}
                    </div>{" "}
                    <div className="col">
                      <input
                        className="settingsInput settingsInput:focus"
                        type="tel"
                        id="pomodoroDuration"
                        name="pomodoroDuration"
                        value={schemeDetails.pomodoroDuration.replace(
                          /\D/g,
                          ""
                        )}
                        placeholder="Pomodoro duration"
                        required
                        onChange={handleChange}
                      />{" "}
                      <p className="setingsTextSize">in minutes</p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    {" "}
                    <div className="col">
                      {" "}
                      <label className="form-label">
                        {" "}
                        Short break duration:{" "}
                      </label>{" "}
                    </div>{" "}
                    <div className="col">
                      <input
                        className="settingsInput settingsInput:focus"
                        type="tel"
                        id="shortBreakDuration"
                        name="shortBreakDuration"
                        value={schemeDetails.shortBreakDuration.replace(
                          /\D/g,
                          ""
                        )}
                        placeholder="Short break duration"
                        required
                        onChange={handleChange}
                      />{" "}
                      <p className="setingsTextSize">in minutes</p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    {" "}
                    <div className="col">
                      <label className="form-label">Long break duration:</label>
                    </div>
                    <div className="col">
                      <input
                        className="settingsInput settingsInput:focus"
                        type="tel"
                        id="longBreakDuration"
                        name="longBreakDuration"
                        value={schemeDetails.longBreakDuration.replace(
                          /\D/g,
                          ""
                        )}
                        placeholder="Long break duration"
                        required
                        onChange={handleChange}
                      />{" "}
                      <p className="setingsTextSize">in minutes</p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    {" "}
                    <div className="col">
                      {" "}
                      <label className="form-label">
                        Long break delay:
                      </label>{" "}
                    </div>{" "}
                    <div className="col">
                      <input
                        className="settingsInput settingsInput:focus"
                        type="tel"
                        id="longBreakDelay"
                        name="longBreakDelay"
                        value={schemeDetails.longBreakDelay.replace(/\D/g, "")}
                        placeholder="Long break delay"
                        required
                        onChange={handleChange}
                      />{" "}
                      <p className="setingsTextSize">in pomodoros</p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row" style={{ paddingBottom: 20 }}>
                    {" "}
                    <div className="col">
                      {" "}
                      <div className="form-check form-switch">
                        {" "}
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Auto start pomodoros
                        </label>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckChecked"
                          defaultChecked
                          onChange={(e) => {
                            setSchemeDetails({
                              ...schemeDetails,
                              autostartPomodoros: e.target.checked,
                            });
                          }}
                        />{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    {" "}
                    <div className="col" style={{ paddingBottom: 20 }}>
                      {" "}
                      <div className="form-check form-switch">
                        {" "}
                        <label
                          className="form-check-label"
                          htmlFor="flexSwitchCheckChecked"
                        >
                          Auto start breaks
                        </label>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckChecked"
                          defaultChecked
                          onChange={(e) => {
                            setSchemeDetails({
                              ...schemeDetails,
                              autoStartBreaks: e.target.checked,
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="layout">
                    {" "}
                    <button
                      className="finishedTodoButton finishedTodoButton:hover"
                      title="Create"
                      type="button"
                      onClick={() => setFormSubmit(true) && addScheme()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        class="bi bi-check-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                        <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </TabPanel>
            <TabPanel>
              {" "}
              <div className="row">
                {" "}
                <div style={{ paddingBottom: 20 }} className="col">
                  {" "}
                  <h5>Select scheme you want to use:</h5>{" "}
                </div>{" "}
                <div className="row">
                  {" "}
                  <div className="settings">
                    {" "}
                    {allSchemes.map((schemeDetails) => (
                      <div className="row" style={{ paddingBottom: 20 }}>
                        {" "}
                        <div className="col-sm-5">
                          {" "}
                          <p>Pomodoro name:</p>{" "}
                        </div>{" "}
                        <div className="col-sm-7">
                          {" "}
                          {schemeDetails.pomodoroName}{" "}
                        </div>{" "}
                        <div className="col-sm-5">
                          {" "}
                          <p>Pomodoro duration:</p>{" "}
                        </div>{" "}
                        <div className="col-sm-7">
                          {" "}
                          {schemeDetails.pomodoroDuration}{" "}
                        </div>{" "}
                        <div className="col-sm-5">
                          {" "}
                          <p>Short break duration:</p>{" "}
                        </div>{" "}
                        <div className="col-sm-7">
                          {" "}
                          {schemeDetails.shortBreakDuration}{" "}
                        </div>{" "}
                        <div className="col-sm-5">
                          {" "}
                          <p>Long break duration:</p>{" "}
                        </div>{" "}
                        <div className="col-sm-7">
                          {" "}
                          {schemeDetails.longBreakDuration}{" "}
                        </div>{" "}
                        <div className="col-sm-5">
                          {" "}
                          <p>Long break delay:</p>{" "}
                        </div>{" "}
                        <div className="col-sm-7">
                          {" "}
                          {schemeDetails.longBreakDelay}{" "}
                        </div>{" "}
                        <div className="col-sm-5">
                          <p>Autostart pomodoro: </p>
                        </div>
                        <div className="col-sm-7">
                          {" "}
                          {schemeDetails.autostartPomodoros.toString()}{" "}
                        </div>{" "}
                        <div className="col-sm-5">
                          <p>Autostart breaks: </p>
                        </div>
                        <div className="col-sm-7">
                          {schemeDetails.autoStartBreaks.toString()}
                        </div>
                        <div className="col-sm-5">
                          <p>Scheme active: </p>
                        </div>
                        <div className="col-sm-7">
                          {schemeDetails.isActive.toString()}
                        </div>
                        <div className="col-sm-12 center">
                          {" "}
                          <link
                            rel="stylesheet"
                            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                          ></link>
                          <button
                            className="removeTodoButton RemoveTodoButton:hover"
                            title="Delete"
                            onClick={() => removeScheme(schemeDetails.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="28"
                              height="28"
                              fill="currentColor"
                              class="bi bi-x-square"
                              viewBox="0 0 16 16"
                            >
                              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                          </button>
                          {!schemeDetails.isActive ? (
                            <button
                              className="notActiveButton notActiveButton:hover"
                              onClick={() => activeScheme(schemeDetails.id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                fill="currentColor"
                                class="bi bi-circle"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              </svg>
                            </button>
                          ) : (
                            <button
                              className="activeButton activeButton:hover"
                              onClick={() => activeScheme(schemeDetails.id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                fill="currentColor"
                                class="bi bi-circle-fill"
                                viewBox="0 0 16 16"
                              >
                                <circle cx="8" cy="8" r="8" />
                              </svg>
                            </button>
                          )}{" "}
                        </div>{" "}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Dialog>
    </div>
  );
}

export default Settings;
