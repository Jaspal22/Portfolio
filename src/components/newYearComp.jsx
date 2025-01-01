import React from "react";
import { Link } from "react-router-dom";
import HIMG from "../Image/file2.png"
import APP from "../App"

function NewComp() {
    return (
        <div>
            <section style={{ maxWidth: "100vw", maxHeight: "100vh" }}>
                <div
                    style={{
                        minWidth: "95vw",
                        minHeight: "90vh",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingTop: "2vh",
                        padding: "5vh",
                    }}
                >
                    <div
                        style={{
                            maxHeight: "90vh",
                            maxWidth: "50%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "5vw",
                        }}
                    >
                        <h1 style={{ fontSize: "45px" }}>
                            <span
                                style={{
                                    fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                                    color: "#6d23ce",
                                }}
                            >
                                Happy
                            </span>{" "}
                            New{" "}
                            <span
                                style={{
                                    fontFamily: "'Courier New', Courier, monospace",
                                    color: "rgb(118, 118, 234)",
                                }}
                            >
                                Year
                            </span>{" "}
                            ! 🎉
                        </h1>
                        <p>
                            Happy New Year! 🎉 May this year bring you as much joy as finding unexpected money in your coat
                            pocket. Let's toast to fewer awkward Zoom calls and more in-person fun. May your Wi-Fi be fast, your
                            snacks be plentiful, and your laughs be endless. Here's to a year filled with adventures, laughter,
                            and unforgettable memories. Cheers to a fantastic 2025!
                        </p>
                    </div>
                    <div style={{ maxHeight: "90vh", maxWidth: "50%" ,
                             display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center" }}>
                        <Link to= "/portfolio" style={{ textDecoration: "none" }}>
                            <button style={{  padding: "10px 20px", backgroundColor: "#84508D", color: "white" , borderRadius: "13px" }}>PORTFOLIO</button>
                        </Link>
                        <img
                            style={{ height: "90vh", maxHeight: "90vh" }}
                            src={HIMG}
                            alt="Character-img"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NewComp;







// import App from "../App";
// import { Link } from "react-router-dom";



// function NewComp() {
//     return (

//         <div>
//                 <section style="max-w-[100vw] max-h-screen">
//                     <div style=" min-w-[95vw] min-h-[90vh] flex justify-between items-center pt-[2vh] p-[5vh]">
//                         <div style="max-h-[90vh] max-w-[50%] flex flex-col justify-center items-center p-[5vw]">
//                             <h1 style="font-size: 45px;"><span
//                                 style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; color: #6d23ce;">Happy</span>
//                                 New  <span style="font-family: 'Courier New', Courier, monospace; color: rgb(118, 118, 234);">Year</span> ! 🎉</h1>

//                             <p>Happy New Year! 🎉 May this year bring you as much joy as finding unexpected money in your coat
//                                 pocket. Let's toast to fewer awkward Zoom calls and more in-person fun. May your Wi-Fi be fast, your
//                                 snacks be plentiful, and your laughs be endless. Here's to a year filled with adventures, laughter,
//                                 and unforgettable memories. Cheers to a fantastic 2025!</p>
//                         </div>
//                         <div style=" max-h-[90vh] max-w-[50%]">
//                             <Link to= {App}>
//                             <button>PORTFOLIO</button>
//                             </Link>
//                             <img style=" h-[90vh] max-h-[90vh]" src="./Image/file2.png" alt="Character-img"></img>
//                         </div>
//                     </div>
//                 </section>
//         </div>

//     );
// }

// export default NewComp;





// {/* <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Happy New Year</title>

//     <link rel="stylesheet" href="./styles.css">
// </head>

// <body>
//     <section class="NEWyear">
//         <div class="Hero-container">
//             <div class="Txt_section">
//                 <h1 style="font-size: 45px;"><span
//                         style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; color: #6d23ce;">Happy</span>
//                     New  <span style="font-family: 'Courier New', Courier, monospace; color: rgb(118, 118, 234);">Year</span> ! 🎉</h1>
                    
//                 <p>Happy New Year! 🎉 May this year bring you as much joy as finding unexpected money in your coat
//                     pocket. Let's toast to fewer awkward Zoom calls and more in-person fun. May your Wi-Fi be fast, your
//                     snacks be plentiful, and your laughs be endless. Here's to a year filled with adventures, laughter,
//                     and unforgettable memories. Cheers to a fantastic 2025!</p>
//             </div>
//             <div class="Img-section">
//                 <img class="char-img" src="./Image/file2.png" alt="Character-img">
//             </div>
//         </div>
//     </section>
// </body>

// </html> */}