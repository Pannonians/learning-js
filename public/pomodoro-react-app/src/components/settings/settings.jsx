import { useEffect, useMemo, useState } from "react";
import { Dialog } from "@reach/dialog";
import { Tab, Tabs, TabList, TabPanel, TabPanels } from "@reach/tabs";
import "@reach/dialog/styles.css";
import "@reach/tabs/styles.css";
import "../settings/Popup.css";
import "../../App.css";
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
  const [handleSave, setHandleSave] = useState(false);
  const [allSchemes, setAllSchemes] = useState(() => {
    const savedSchemes = localStorage.getItem("allSchemes");
    if (savedSchemes) {
      return JSON.parse(savedSchemes);
    } else {
      return [];
    }
  });

  const [schemeDetails, setSchemeDetails] = useState({
    pomodoroDuration: "",
    shortBreakDuration: "",
    longBreakDuration: "",
    longBreakDelay: "",
    pomodoroCategory: "",
    autostartPomodoros: true,
    autoStartBreaks: true,
  });
  useEffect(() => {
    localStorage.setItem("allSchemes", JSON.stringify(allSchemes));
  }, [allSchemes]);

  const addScheme = () => {
    const newItem = [...allSchemes, { ...schemeDetails }];
    localStorage.setItem("allSchemes", JSON.stringify(newItem));
  };

  const saveInStorage = () => {
    if (
      schemeDetails.pomodoroDuration !== "" &&
      schemeDetails.shortBreakDuration !== "" &&
      schemeDetails.longBreakDuration !== "" &&
      schemeDetails.longBreakDelay !== "" &&
      schemeDetails.pomodoroCategory !== ""
    ) {
      setAllSchemes([
        ...allSchemes,
        {
          pomodoroDuration: schemeDetails.pomodoroDuration,
          shortBreakDuration: schemeDetails.shortBreakDuration,
          longBreakDuration: schemeDetails.longBreakDuration,
          longBreakDelay: schemeDetails.longBreakDelay,
          pomodoroCategory: schemeDetails.pomodoroCategory,
          autostartPomodoros: schemeDetails.autostartPomodoros,
          autoStartBreaks: schemeDetails.autoStartBreaks,
        },
      ]);
      setSchemeDetails({
        pomodoroDuration: "",
        shortBreakDuration: "",
        longBreakDuration: "",
        longBreakDelay: "",
        pomodoroCategory: "",
        autostartPomodoros: true,
        autoStartBreaks: true,
      });
      setHandleSave(false)
    }
  };

  useEffect(() => {
    saveInStorage();
  }, [handleSave]);

  const storageSchemes = useMemo(() => {
    if (handleSave == false) {
      const savedSchemes = localStorage.getItem("allSchemes");
      if (savedSchemes) {
        return JSON.parse(savedSchemes);
      } else {
        return [];
      }
    }
    return [];
  }, [showModal]);

  const removeScheme = (id) => {
    const removeItem = allSchemes.filter((schemeDetails) => {
      return schemeDetails.id !== id;
    });
    setAllSchemes(removeItem);
  };

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
                  <form className="row g-2 todos">
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
                      <div className="col" style={{ paddingBottom: 20 }}>
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
                    <div className="row" style={{ paddingBottom: 20 }}>
                      <div className="col">
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
                      </div>
                    </div>
                    <div className="row">
                      <div className="col" style={{ paddingBottom: 20 }}>
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
                      </div>
                    </div>
                    <div className="layout">
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => setHandleSave(true)&& addScheme()}
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
              <div className="row">
                <div style={{ paddingBottom: 20 }} className="col">
                  {" "}
                  Select Scheme you want to use:
                </div>

                <div className="todos">
                  {storageSchemes.map((todo) => (
                    <div className="row">
                      <div className="row" style={{ paddingBottom: 20 }}>
                        <div className="col">
                        <h3>Pomodoro category: {todo.pomodoroCategory}</h3>
                          <p>Pomodoro duration: {todo.pomodoroDuration}</p>
                          <p>Short break duration: {todo.shortBreakDuration}</p>
                          <p>Long break duration: {todo.longBreakDuration}</p>
                          <p>Long break delay: {todo.longBreakDelay}</p>
                          <p>
                            Autostart pomodoro:{" "}
                            {todo.autostartPomodoros.toString()}
                          </p>
                          <p>
                            Autostart breaks: {todo.autoStartBreaks.toString()}
                          </p>
                        </div>
                        <div className="col">
                          <link
                            rel="stylesheet"
                            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                          ></link>
                          <button class="btnn">
                            <i class="fa fa-trash"></i>
                          </button>
                          <span> </span>
                          <button class="btnn">
                            <i class="fa fa-trash"></i>
                          </button>
                          <span> </span>
                          
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Dialog>
    </div>
  );
}
