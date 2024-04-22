import "./homepage.css"

function Home(){
       return(
           <div className="container-fluid border border-3" id="lisz">
                 <div className="row">
                       <div className="col-md-7 mt-5">
                             <p className="fs-3 text-uppercase text-light pt-5 pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eveniet tempora asperiores obcaecati laborum recusandae exercitationem ducimus excepturi in. Assumenda eius dolorum saepe hic recusandae! Animi sunt quaerat odit maxime.</p>
                             <button className="btn btn-outline-success fs-4 btn-lg text-uppercase fw-bold rounded-4 mb-4" type="button">more</button>
                       </div>
                       <div className="col-md-5 mt-5 border-start rounded-start-pill border-4 border-danger-subtle">
                             <h1 className="text-capitalize text-warning fw-bold pt-5 px-5">lorem ipsome heading</h1>
                             <button className="btn btn-outline-warning fs-3 w-25 text-uppercase fw-bold rounded-4" type="button">more</button>
                       </div>
                 </div>
           </div>
       );
}

export default Home