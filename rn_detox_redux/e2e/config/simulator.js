import { exec } from "child-process-promise";

const Simulator = {
  setLocation(options) {
    exec(`set-simulator-location -c ${options.lat} ${options.long}`)
  }
}

export default Simulator