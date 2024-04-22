import './Component.css'


function Grid(){
        return(
               <>
                 
              <div className=" container-fluid">
                      
                    <div className="row">
                          <div className="col-md-7 mt-4 mb-5">
                                <h1 className="fw-bold text-white text-uppercase text-decoration-underline mx-3 my-3">mainheading</h1>
                                <p className="fs-4 text-capitalize text-danger-emphasis mx-3 my-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas totam et, id obcaecati dolor libero consectetur ipsa, veniam beatae expedita mollitia! A praesentium aut architecto, blanditiis dolorum saepe voluptatem aliquam.</p>
                                <button className="btn btn-outline-light fs-3 rounded-4 w-25 mx-4 my-2">click</button>
                          </div>
                          <div className="col-md-5 my-5">
                               <input placeholder="search" className="w-75 h-25 fs-1 px-4 rounded-4 border border-2 border-warning text-info mx-5 my-5"/>
                          </div>
                    </div>
              </div>
            
            </>
        );
}

export default Grid;