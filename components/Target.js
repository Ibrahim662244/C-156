AFRAME .registerComponent("target-ring", {
    init:function () {
        for (var i = 1; i <= 20; i++) {
            var id = `ring${i}`;
            var posX = (Math.random()*3000+(-1000));
            var posY = (Math.random()*2+(-1));
            var posZ = (Math.random()*3000+(-1000));
            var position = {x:posX, y:posY, z:posZ}
            this.createRings(id, position);
        }
    },
    createRings:function (id, position) {
        var terrainEl = document.querySelector("#terrain");
        var ringEl = document.createElement("a-entity");
        ringEl.setAttribute("id", id);
        ringEl.setAttribute("position", position);
        ringEl.setAttribute("material", "color", "yellow");
        ringEl.setAttribute("geometry", {primitive:"torus", radius:8});
        ringEl.setAttribute("static-body",{
            shape:"sphere", sphereRadius:2
        });
        ringEl.setAttribute("game-play", {
            elementId:`#${id}`
        });

        terrainEl.appendChild(ringEl);
    }
})

AFRAME .registerComponent("target-sphere", {
    init:function () {
        for (var i = 1; i <= 20; i++) {
            var id = `sphere${i}`
            var posX = (Math.random()*3000+(-1000));
            var posY = (Math.random()*2+(-1));
            var posZ = (Math.random()*3000+(-1000));
            var position = {x:posX, y:posY, z:posZ}
            this.createSpheres(id, position);
        }
    },
    createSpheres:function (id, position) {
        var terrainEl = document.querySelector("#terrain");
        var sphereEl = document.createElement("a-entity");
        sphereEl.setAttribute("id", id);
        sphereEl.setAttribute("position", position);
        sphereEl.setAttribute("material", "color", "yellow");
        sphereEl.setAttribute("geometry", {primitive:"sphere", radius:8});
        sphereEl.setAttribute("static-body",{
            shape:"sphere", sphereRadius:2
        });
        sphereEl.setAttribute("game-play", {
            elementId:`#${id}`
        });
        terrainEl.appendChild(sphereEl);
    }
    
})