import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadSomeData();  // Cargar las agendas cuando el componente se monta
    }, []);

    return (
        <div className="text-center mt-5">
            <h1>Agendas</h1>
            <ul>
                {Array.isArray(store.agendas) && store.agendas.length > 0 ? (
                    store.agendas.map((agenda, index) => (
                        <li key={index}>{agenda.slug}</li> // Mostrar el slug de cada agenda
                    ))
                ) : (
                    <p>No hay agendas disponibles.</p>
                )}
            </ul>
            <a href="#" className="btn btn-success">
                If you see this green button, bootstrap is working
            </a>
        </div>
    );
};
