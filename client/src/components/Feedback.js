import React from "react";

export default function Feedback() {
    return(
        <div className="container pt-3 pb-3">
	        <div className="row">
	          <div className="card w-100">
	            <div className="card-header">
	              <h1>
	                Phản hồi
	              </h1>
	            </div>
	            <div className="card-body">
	              <blockquote className="blockquote mb-0">
	                <form>
	                  <div className="row">
                      <div className="col-md-6">
	                      <fieldset className="form-group">
	                        <label htmlFor="formGroupExampleInput">
	                          Họ và tên
	                        </label>
	                        <input className="form-control" id="formGroupExampleInput" type="text" />
	                      </fieldset>
	                    </div>
	                    <div className="col-md-6">
	                      <fieldset className="form-group">
	                        <label htmlFor="formGroupExampleInput">
	                          Số điện thoại
	                        </label>
	                        <input className="form-control" id="formGroupExampleInput" type="text" />
	                      </fieldset>
	                    </div>
	                  </div>
	                  <div className="row">
	                    <div className="col-md-12">
	                      <fieldset className="form-group">
	                        <label htmlFor="formGroupExampleInput">
	                          Email
	                        </label>
	                        <input className="form-control" id="formGroupExampleInput" type="text" />
	                      </fieldset>
	                    </div>
	                  </div>
	                  <div className="row">
	                    <div className="col-md-12">
	                      <fieldset className="form-group">
	                        <label htmlFor="formGroupExampleInput">
	                          Nội dung
	                        </label>
	                        <textarea className="form-control" id="formGroupExampleInput" rows={5} type="text" defaultValue={"                                                "} />
	                      </fieldset>
	                    </div>
	                  </div>
	                  <button className="btn btn-success">
	                    Gửi
	                  </button>
	                </form>
	              </blockquote>
	            </div>
	          </div>
	        </div>
	      </div>
    )
}
