import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Gurgaowap from "../assets/gurgaowmasterplan.webp"; // Add more if needed

const mapList = [
    {
        id: 1,
        title: "Gurgaon Master Plan 2031",
        image: Gurgaowap,
        description: "Detailed zoning and planning layout of Gurgaon city.",
    },
    {
        id: 1,
        title: "Gurgaon Master Plan 2031",
        image: Gurgaowap,
        description: "Detailed zoning and planning layout of Gurgaon city.",
    },
    
];

const Maps = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [zoom, setZoom] = useState(1);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [selectedMap, setSelectedMap] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const openModal = (map) => {
        setSelectedMap(map);
        setIsOpen(true);
        setZoom(1);
        setImageLoaded(false);
    };

    const closeModal = () => {
        setIsOpen(false);
        setZoom(1);
        setSelectedMap(null);
    };

    const zoomIn = () => setZoom((z) => Math.min(z + 0.2, 4));
    const zoomOut = () => setZoom((z) => Math.max(z - 0.2, 0.5));

    return (
        <section className="py-12 px-4 bg-white">
            <div className="max-w-4xl mx-auto text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800">Master Plans</h2>
                <p className="text-gray-500 mt-2 text-sm md:text-base">
                    Click on any map below to explore detailed master plans.
                </p>
            </div>

            {/* Cards - 1 per row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {mapList.map((map) => (
                    <div
                        key={map.id}
                        data-aos="fade-up"
                        onClick={() => openModal(map)}
                        className="cursor-pointer bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition hover:shadow-2xl"
                    >
                        <img
                            src={map.image}
                            alt={map.title}
                            className="w-full h-auto object-contain"
                            loading="lazy"
                        />
                        <div className="p-5">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                                {map.title}
                            </h3>
                            <p className="text-sm text-gray-600">{map.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isOpen && selectedMap && (
                <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
                    <div className="relative bg-white rounded-lg overflow-hidden max-w-6xl w-full max-h-[90vh]">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white bg-black rounded-full px-2 py-1 text-sm z-10"
                        >
                            ✕
                        </button>

                        {/* Zoom Controls */}
                        <div className="absolute top-2 left-2 z-10 space-x-2">
                            <button onClick={zoomIn} className="bg-white border rounded px-3 py-1 font-bold shadow">➕</button>
                            <button onClick={zoomOut} className="bg-white border rounded px-3 py-1 font-bold shadow">➖</button>
                        </div>

                        {/* Image Container */}
                        <div className="h-[80vh] w-full overflow-hidden flex items-center justify-center bg-gray-100 relative">
                            {!imageLoaded && (
                                <div className="absolute inset-0 flex items-center justify-center z-10">
                                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                                </div>
                            )}

                            <div className="overflow-auto w-full h-full flex items-center justify-center">
                                <img
                                    src={selectedMap.image}
                                    alt={selectedMap.title}
                                    onLoad={() => setImageLoaded(true)}
                                    style={{
                                        transform: `scale(${zoom})`,
                                        transformOrigin: "center center",
                                        transition: "transform 0.2s ease-in-out",
                                    }}
                                    className={`max-w-full max-h-full object-contain ${!imageLoaded ? "opacity-0" : "opacity-100 transition-opacity duration-300"
                                        }`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );

};

export default Maps;
