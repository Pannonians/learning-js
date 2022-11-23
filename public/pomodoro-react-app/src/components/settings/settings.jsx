import { useState } from "react";
import { Dialog } from "@reach/dialog";
import { Tab, Tabs, TabList, TabPanel, TabPanels } from "@reach/tabs";
import "@reach/dialog/styles.css";
import "@reach/tabs/styles.css";
import "../settings/Popup.css";
import { VisuallyHidden } from "@reach/visually-hidden";

const Scheme = ({ type = "text", setter, schemeDetails, properties }) => {
  return (
    <div>
      <p>
        <input
          type={type}
          placeholder={properties}
          onChange={(e) => {
            setter({
              ...schemeDetails,
              [properties]: e.target.value,
            });
          }}
          value={schemeDetails[properties]}
        />
      </p>
    </div>
  );
};

export default function Settings() {
  const [showModal, setShowModal] = useState(false);
  const open = () => setShowModal(true);
  const close = () => setShowModal(false);
  const [saveData, setSaveData] = useState(false);
  const [schemeDetails, setSchemeDetails] = useState({
    pomodoroDuration: "",
    shortBreakDuration: "",
    longBreakDuration: "",
    longBreakDelay: "",
    pomodoroCategory: "",
    autostartPomodoros: true,
    autoStartBreaks: true,
    readonly: false,
  });

  return (
    <div>
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
        <h1 className="layout">PREFERENCES</h1>
        <button className="close-button" onClick={close}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>x</span>
        </button>
        <Tabs>
          <TabList className="tabsnav">
            <Tab>Timer settings</Tab>
            <Tab>Application</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div>
                <div className="row">
                  <div className="col">
                    <h2 style={{ paddingBottom: 40 }}>Schemes:</h2>
                  </div>
                  <div className="col">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="collapse"
                      data-bs-target="#demo"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Create Scheme
                    </button>
                  </div>
                </div>
                <div id="demo" className="collapse">
                  <form className="row g-2">
                    <div className="row">
                      <div className="col">
                        <label className="form-label">Pomodoro duration:</label>
                      </div>
                      <div className="col">
                        <Scheme
                          type="text"
                          properties={"pomodoroDuration"}
                          className="form-control"
                          setter={setSchemeDetails}
                          schemeDetails={schemeDetails}
                        />
                        <p>in minutes</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <label className="form-label">
                          Short break duration:
                        </label>
                      </div>
                      <div className="col">
                        <Scheme
                          type="text"
                          properties={"shortBreakDuration"}
                          className="form-control"
                          setter={setSchemeDetails}
                          schemeDetails={schemeDetails}
                        />
                        <p>in minutes</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <label className="form-label">
                          Long break duration:
                        </label>
                      </div>
                      <div className="col">
                        <Scheme
                          type="text"
                          properties={"longBreakDuration"}
                          className="form-control"
                          setter={setSchemeDetails}
                          schemeDetails={schemeDetails}
                        />
                        <p>in minutes</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <label className="form-label">Long break delay:</label>
                      </div>
                      <div className="col">
                        <Scheme
                          type="text"
                          properties={"longBreakDelay"}
                          className="form-control"
                          setter={setSchemeDetails}
                          schemeDetails={schemeDetails}
                        />
                        <p>in pomodoros</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <label className="form-label">Pomodoro category:</label>
                      </div>
                      <div className="col" style={{ paddingBottom: 40 }}>
                        <select
                          className="dropdown dropdown:hover"
                          id="category"
                          name="category"
                          value={schemeDetails.pomodoroCategory}
                          onChange={(e) => {
                            let input = e.target.value;
                            setSchemeDetails({
                              ...schemeDetails,
                              pomodoroCategory: input,
                            });
                          }}
                          required
                        >
                          <option value=""></option>
                          <option value="Work">Work</option>
                          <option value="Personal">Personal</option>
                          Category
                        </select>
                      </div>
                    </div>
                    <div className="form-check form-switch">
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
                      />
                    </div>
                    <div className="form-check form-switch">
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
                    <div className="layout">
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => setSaveData(true)}
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Application</h2>
              <p>ovo je neki drugi tekst</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Dialog>
    </div>
  );
}
