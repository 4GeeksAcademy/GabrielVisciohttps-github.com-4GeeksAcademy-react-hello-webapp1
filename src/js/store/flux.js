const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            agendas: [],  // Inicializar agendas como un array vacío
            demo: [
                {
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ]
        },
        actions: {
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            loadSomeData: () => {
                fetch('https://playground.4geeks.com/contact/agendas?offset=0&limit=100', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(resp => resp.json())
                .then(data => {
                    console.log(data); // Verifica que la estructura de data es la esperada
                    setStore({ agendas: data.agendas });  // Acceder al array agendas dentro del objeto data
                })
                .catch(error => {
                    console.log(error);
                });
            },
            changeColor: (index, color) => {
                const store = getStore();
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });
                setStore({ demo: demo });
            }
        }
    };
};

export default getState;
