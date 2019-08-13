import React from "react";

export default function Contact() {
    return(
        <div className="container pt-3 pb-3">
	        <div className="row">
	          <div className="card w-100">
	            <div className="card-header">
	              <h1>
	                Liên hệ
	              </h1>
	            </div>
	            <div className="card-body">
	              <blockquote className="blockquote mb-0">
	                <strong>
	                  ĐỊA CHỈ:
	                </strong>
	                <p>
	                  137 Nguyễn Thị Thập, Q.Liên Chiểu, TP.Đà Nẵng
	                </p>
	                <strong>
	                  SĐT:
	                </strong>
	                <p>
	                  0337892690
	                </p>
	                <strong>
	                  EMAIL:
	                </strong>
	                <p>
	                  nxv109@gmail.com
	                </p>
	                {/* Button trigger modal */}
	                <button className="btn btn-success" data-target="#exampleModal" data-toggle="modal" type="button">
	                  LIÊN HỆ
	                </button>
	                {/* Modal */}
	                <div aria-hidden="true" aria-labelledby="exampleModalLabel" className="modal fade" id="exampleModal" role="dialog" tabIndex={-1}>
	                  <div className="modal-dialog" role="document">
	                    <div className="modal-content">
	                      <div className="modal-header">
	                        <h5 className="modal-title" id="exampleModalLabel">
	                          Liên hệ
	                        </h5>
	                        <button aria-label="Close" className="close" data-dismiss="modal" type="button">
	                          <span aria-hidden="true">
	                            ×
	                          </span>
	                        </button>
	                      </div>
	                      <div className="modal-body">
	                        <div className="card-body">
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
	                                  <textarea rows={5} className="form-control" id="formGroupExampleInput" type="text" defaultValue={"                                                                    "} />
	                                </fieldset>
	                              </div>
	                            </div>
	                          </form>
	                        </div>
	                      </div>
	                      <div className="modal-footer">
	                        <button className="btn btn-secondary" data-dismiss="modal" type="button">
	                          Đóng
	                        </button>
	                        <button className="btn btn-success" type="button">
	                          Gửi
	                        </button>
	                      </div>
	                    </div>
	                  </div>
	                </div>
	              </blockquote>
	            </div>
	          </div>
	        </div>
	      </div>
    )
}