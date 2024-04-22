import './Cardslider.css'

function Slide(){
       return(
           <div className="carousel slide" id="carouselExample">
                 <div className="carousel-inner">
                      <div className="carousel-item active border rounded-5 bg-success" id="size1">
                           <p className="fs-2 text-light text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis reprehenderit eius laboriosam soluta quam ullam repellendus natus! Laboriosam neque molestiae beatae nihil nisi voluptate! Ipsa ipsam numquam fuga ipsum perferendis.</p>
                      </div>
                      <div className="carousel-item border rounded-5 bg-success" id="size2">
                          <p className="fs-2 text-light text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae tempore sit vitae eligendi itaque asperiores sunt dolorem quidem ratione ullam, nam ut autem distinctio facilis, suscipit voluptas sed sapiente non!</p>
                      </div>
                      <div className="carousel-item border rounded-5 bg-success" id="size3">
                          <p className="fs-2 text-light text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae tempore sit vitae eligendi itaque asperiores sunt dolorem quidem ratione ullam, nam ut autem distinctio facilis, suscipit voluptas sed sapiente non!</p>
                      </div>
                 </div>
                 <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                 </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
           </div>
       );
}

export default Slide;