import { handles } from "./assests/handles";
import Cards from "./components/Cards";

export default function SocialMediaHandles(){
    return(
        <div className="container padding:20px">
            <h2 className="my-4 head">Integrations</h2>
            <div className="row">
                {
                    handles.map((item) => (
                        <div className="col-4">
                            <Cards key = {item.id} {...item} ></Cards>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}