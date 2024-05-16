import AccountInformation from "./Account Information/AccountInformation"
import Notifications from "./Notifications/Notifications"
import SecurityAndPrivacy from "./Security and privacy/SecurityAndPrivacy"
import SocialMediaHandles from "./Social Media Handles/SocialMediaHandles"
import NavBar from "./NavBar"

function App() {

    return (
        <div className="bg-dark text-white">
            <AccountInformation></AccountInformation>
            <Notifications></Notifications>
            <SecurityAndPrivacy></SecurityAndPrivacy>
            <SocialMediaHandles></SocialMediaHandles>
        </div>
        
    )
}

export default App
