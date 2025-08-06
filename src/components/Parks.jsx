import { IoFootstepsSharp } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { IoPaw } from "react-icons/io5";
import banff2 from "../assets/banff-second.jpg";
import breton2 from "../assets/breton-second.webp";
import jasper2 from "../assets/jasper-second.jpg";
import { motion } from "framer-motion";
import '../Parks.css';

function Parks() {
    return (
        <div className="container2">

            
            <motion.div
                className="box1"
                initial={{ opacity: 0, y:30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
            >
                <IoFootstepsSharp className="box-icon"/>
                <img 
                    src={jasper2}
                    className="park-pics"
                    alt="Jasper National Park"
                />
                <p className="title">Jasper National Park</p>
                <p className="description">Known for its rugged wilderness and vast trail networks, Jasper is a dream destination for hiking enthusiasts seeking awe-inspiring alpine adventures.</p>
            </motion.div>

           
            <motion.div
                className="box2"
                initial={{ opacity: 0, y:30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <IoPaw className="box-icon"/>
                <img 
                    src={breton2}
                    className="park-pics"
                    alt="Cape Breton Highlands National Park"
                />
                <p className="title">Cape Breton Highlands<br></br>National Park</p>
                <p className="description">With pet-friendly trails and coastal views, Cape Breton Highlands is perfect for exploring the great outdoors alongside your furry companion.</p>
            </motion.div>
        
           
            <motion.div
                className="box3"
                initial={{ opacity: 0, y:30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
            >
                <FaCamera className="box-icon"/>
                <img
                    src={banff2}
                    className="park-pics"
                    alt="Banff National Park"
                />
                <p className="title">Banff National Park</p>
                <p className="description">Nestled in the heart of the Rockies, Banff offers breathtaking mountain vistas and turquoise lakes that make it a paradise for scenic photography.</p>
            </motion.div>

        </div>
    );
}

export default Parks;