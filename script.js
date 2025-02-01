var arr = [
    { name: "Bent Lindberg Portfolio", img: "https://i.pinimg.com/736x/02/54/07/0254079c1ea64ed63dcaea056e56803a.jpg" },
    { name: "Snowy Forest with a full-moon in the sky", img: "https://plus.unsplash.com/premium_photo-1737836420070-e3ee9611d50c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" },
    { name: "Woman Sitting in the ground of a park", img: "https://images.unsplash.com/photo-1736779580644-6b4268af4642?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" },
    { name: "Body Of water covered with large rocks", img: "https://images.unsplash.com/photo-1736761695540-c6ef1c5be30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8" },
    { name: "Bird sitting on the branch of tree", img: "https://images.unsplash.com/photo-1737859682164-f949f037db5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "A lighthouse on top of pile of rocks", img: "https://images.unsplash.com/photo-1737822896208-2324598f6797?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" },
    { name: "Bent Lindberg Portfolio", img: "https://i.pinimg.com/736x/02/54/07/0254079c1ea64ed63dcaea056e56803a.jpg" },
    { name: "Snowy Forest with a full-moon in the sky", img: "https://plus.unsplash.com/premium_photo-1737836420070-e3ee9611d50c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" },
    { name: "Woman Sitting in the ground of a park", img: "https://images.unsplash.com/photo-1736779580644-6b4268af4642?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" },
    { name: "Body Of water covered with large rocks", img: "https://images.unsplash.com/photo-1736761695540-c6ef1c5be30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8" },
    { name: "Bird sitting on the branch of tree", img: "https://images.unsplash.com/photo-1737859682164-f949f037db5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "A lighthouse on top of pile of rocks", img: "https://images.unsplash.com/photo-1737822896208-2324598f6797?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" },
    { name: "Woman Sitting in the ground of a park", img: "https://images.unsplash.com/photo-1736779580644-6b4268af4642?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" },
    { name: "Body Of water covered with large rocks", img: "https://images.unsplash.com/photo-1736761695540-c6ef1c5be30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8" },
    { name: "Bird sitting on the branch of tree", img: "https://images.unsplash.com/photo-1737859682164-f949f037db5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "A lighthouse on top of pile of rocks", img: "https://images.unsplash.com/photo-1737822896208-2324598f6797?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" },
    { name: "Bent Lindberg Portfolio", img: "https://i.pinimg.com/736x/02/54/07/0254079c1ea64ed63dcaea056e56803a.jpg" },
    { name: "Snowy Forest with a full-moon in the sky", img: "https://plus.unsplash.com/premium_photo-1737836420070-e3ee9611d50c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" },
    { name: "Woman Sitting in the ground of a park", img: "https://images.unsplash.com/photo-1736779580644-6b4268af4642?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" },
    { name: "Body Of water covered with large rocks", img: "https://images.unsplash.com/photo-1736761695540-c6ef1c5be30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8" },
    { name: "Bird sitting on the branch of tree", img: "https://images.unsplash.com/photo-1737859682164-f949f037db5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "A lighthouse on top of pile of rocks", img: "https://images.unsplash.com/photo-1737822896208-2324598f6797?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" },
    { name: "Woman Sitting in the ground of a park", img: "https://images.unsplash.com/photo-1736779580644-6b4268af4642?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" },
    { name: "Body Of water covered with large rocks", img: "https://images.unsplash.com/photo-1736761695540-c6ef1c5be30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8" },
    { name: "Bird sitting on the branch of tree", img: "https://images.unsplash.com/photo-1737859682164-f949f037db5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "A lighthouse on top of pile of rocks", img: "https://images.unsplash.com/photo-1737822896208-2324598f6797?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" },
    { name: "Bent Lindberg Portfolio", img: "https://i.pinimg.com/736x/02/54/07/0254079c1ea64ed63dcaea056e56803a.jpg" },
    { name: "Snowy Forest with a full-moon in the sky", img: "https://plus.unsplash.com/premium_photo-1737836420070-e3ee9611d50c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" },
    { name: "Woman Sitting in the ground of a park", img: "https://images.unsplash.com/photo-1736779580644-6b4268af4642?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" },
    { name: "Body Of water covered with large rocks", img: "https://images.unsplash.com/photo-1736761695540-c6ef1c5be30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8" },
    { name: "Bird sitting on the branch of tree", img: "https://images.unsplash.com/photo-1737859682164-f949f037db5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "A lighthouse on top of pile of rocks", img: "https://images.unsplash.com/photo-1737822896208-2324598f6797?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" },
]

var clutter = "";
var container = document.querySelector(".main");
function showImages() {
    arr.forEach(obj => {
        clutter += `<div class="box">
            <img src="${obj.img}" >
        </div>`
        container.innerHTML = clutter;
    });
}
showImages();
document.querySelectorAll('.box').forEach(box => {
    box.style.position = 'relative';
    box.querySelector('img').style.position = 'relative';
    box.querySelector('img').style.zIndex = '1';
    const overlay = document.createElement('div');
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '2';
    overlay.style.display = 'none';
    box.appendChild(overlay);

    box.addEventListener('mouseover', function () {
        overlay.style.display = 'block';
        const icons = document.createElement('div');
        icons.classList.add('icons');
        icons.style.position = 'absolute';
        icons.style.top = '50%';
        icons.style.left = '50%';
        icons.style.transform = 'translate(-50%, -50%)';
        icons.style.zIndex = '3';
        icons.innerHTML = `
            <i class="fa fa-heart"></i>
            <i class="fa fa-share"></i>
            <i class="fa fa-download"></i>
        `;
        overlay.appendChild(icons);
    });

    box.addEventListener('mouseout', function () {
        overlay.style.display = 'none';
        const icons = overlay.querySelector('.icons');
        if (icons) {
            overlay.removeChild(icons);
        }
    });
});
