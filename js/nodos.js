document.addEventListener('DOMContentLoaded', function() {
    const nodeList = document.getElementById('nodeList');
    const addNodeButton = document.getElementById('addNode');
    const removeNodeButton = document.getElementById('removeNode');
    const changeTextButton = document.getElementById('changeText');
    const changeBackgroundButton = document.getElementById('changeBackground');

    // Función para agregar un nuevo nodo
    addNodeButton.addEventListener('click', function() {
        const newNode = document.createElement('li');
        newNode.textContent = `Nodo ${nodeList.children.length + 1}`;
        nodeList.appendChild(newNode);
    });

    // Función para eliminar el último nodo
    removeNodeButton.addEventListener('click', function() {
        if (nodeList.children.length > 0) {
            nodeList.removeChild(nodeList.lastElementChild);
        } else {
            alert('No hay nodos para eliminar.');
        }
    });

    // Función para cambiar el texto de todos los nodos
    changeTextButton.addEventListener('click', function() {
        const nodes = nodeList.children;
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].textContent = `Nodo Modificado ${i + 1}`;
        }
    });

    // Función para cambiar el color de fondo del contenedor
    changeBackgroundButton.addEventListener('click', function() {
        const colors = ['#ff9a9e', '#fad0c4', '#a1c4fd', '#c2e9fb', '#d4fc79'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.background = `linear-gradient(135deg, ${randomColor}, #ffffff)`;
    });

 
});