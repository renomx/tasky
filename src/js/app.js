var tasks =
    [
        {
            Title: "Hacer tu cama",
            ImagePath: "./assets/images/MakingBed.png",
            Description: "Hacer tu cama te ayuda a que cuando estes muy cansada y te quieras dormir solo te acuestes y ya. Tambien hace que tu cuarto se vea bonito.",
            IsCompleted: false
        },
        {
            Title: "Recoger tu ropa",
            ImagePath: "./assets/images/PickUpClothes.png",
            Description: "Recoger tu ropa y separarla en ropa limpia y ropa sucia nos ayuda a mantener el orden y ahora al lavar la ropa.",
            IsCompleted: false
        },
        {
            Title: "Recoger tus juguetes",
            ImagePath: "./assets/images/PickUpToys.png",
            Description: "Cuando recojes y ordenas tus juguetes se mucho mas facil que cuando busques uno que quieres lo encuentres facil!",
            IsCompleted: false
        },
    ]

var peques =
    [
        {
            Peque: "Isabella",
            ProfilePicPath: "./assets/images/isa.jpg",
            Task: null
        },
        {
            Peque: "Emma",
            ProfilePicPath: "./assets/images/emma.jpg",
            Task: null
        },
        {
            Peque: "Julieta",
            ProfilePicPath: "./assets/images/july.jpg",
            Task: null
        }
    ]


peques.forEach(p => {
    p.Task = tasks[Math.floor(Math.random() * tasks.length)];
});

var container = document.getElementById("task-container");
container.innerHTML = "";
peques.forEach(p => {

    let taskContent = `
        <div class="cell">
            <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="${p.Task.ImagePath}"
                  alt="${p.Task.Title}"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      src="${p.ProfilePicPath}"
                      alt="${p.Peque}"
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">${p.Peque}</p>
                </div>
              </div>

              <div class="content">
                ${p.Task.Description}
                <br />                
              </div>
            </div>
          </div>
      </div>
    `;

    container.innerHTML += taskContent;
});