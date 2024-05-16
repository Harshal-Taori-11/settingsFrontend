import CalenderReminders from "./components/CalenderReminders";
import Volume from "./components/Volume";


export default function Notifications(){

    return(
        <div className="bg-dark text-white p-4">
            <h2 className="my-4 head">Notifications</h2>
            <div className="container ">
                <CalenderReminders></CalenderReminders>
                <Volume></Volume>
            </div>
        </div>
    );

}