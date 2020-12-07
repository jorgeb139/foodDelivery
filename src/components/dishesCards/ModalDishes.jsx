import React from 'react'
//import { makeStyles } from "@material-ui/core/styles";
//import { Modal, TextField, Button} from "@material-ui/core";
import { motion, AnimatePresence} from "framer-motion";

import "./styles.css"

// const ModalDishes = (modalOpen, modalTittle, modalDescription, modalPrice) => {
//     const open = modalOpen;
//     const tittle = modalTittle;
//     const description = modalDescription;
//     const price = modalPrice;

//     const closeModal = () => {
//         open = (!open);
//     };

//     const body=(
//         <div className="modal">
//             <div aling="center">
//                 <h2>
//                     MI MODAL
//                 </h2>
//             </div>
//             <TextField label= {modalTittle} className="text" />
//             <br/>
//             <TextField label= {modalDescription} className="text" />
//             <br/>
//             <TextField label= {modalPrice} className="text" />
//             <br/>
//             <div align = "right" >
//                 <Button color="primary">Enviar</Button>
//                 <Button>Cancelar</Button>
//             </div>
//         </div>
//     );

//     return (
//         <div>
//             {console.log(open)}
//             {console.log(tittle)}
//             {console.log(description)}
//             {console.log(price)}
//             <Modal
//             open={open}
//             onClose={closeModal}>
//                 {body}
//             </Modal>
//         </div>
//     )
// }

const ModalDishes = ( { isToggled, setToggled, children } ) => {

    return (
        <AnimatePresence>
            {console.log("HOla")}
            {isToggled && (
                <motion.div
                    initial ={{ opacity: 0 }}
                    animate ={{ opacity: 1 }}
                    exit ={{ opacity: 0 }}
                    style={{
                        position:"fixed",
                        top:"50%",
                        left:"50%",
                        transform:"translate3d(-50%, 0, 0)"
                    }}
                >
                    <button onClick={() => setToggled (false)}> Close </button>
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ModalDishes;
