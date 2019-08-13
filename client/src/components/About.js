import React from "react";

export default function About() {
    return(
        <div className="container">
        	<div className="row">
        		<div className="card w-100 mt-3">
			        <div className="card-header">
			          <h1>Giới thiệu</h1>
			        </div>
			        <div className="card-body">
			          <blockquote className="blockquote mb-0">
			            <p>Năm 2017 lần đầu tiên kỳ thi THPT Quốc gia, môn Toán được Bộ Giáo dục &amp; Đào tạo áp dụng hình thức thi trắc nghiệm. Sự thay đổi đột ngột này đã làm cho không ít thầy cô giáo cũng như hầu hết các em học sinh cảm thấy bất ngờ, bối rối. Người dạy cũng không chắc dạy như thế nào cho phù hợp, học sinh thì không có tài liệu chính thống, giáo trình hay một sân chơi tầm cỡ  để các em tin tưởng thử sức mình trước kỳ thi chính thức.</p>
			            <div className="img-center mb-3" style={{ width: "50%" }}><img style={{ width: "100%" }} src={require("../../src/libs/images/girl1.jpg")} alt="" /></div>
			            <p>Nhận thấy được sự dịch chuyển của xu hướng dạy học hiện nay, Công ty Công nghệ giáo dục và Sách Tinh Hoa với hơn 10 năm kinh nghiệm hoạt động trong lĩnh vực giáo dục và xuất bản sách đã phối hợp cùng với hơn 200 chuyên gia hàng đầu hiện nay trong lĩnh vực giáo dục phổ thông, tổ chức biên soạn hơn 100.000 câu hỏi trắc nghiệm trực tuyến đảm bảo tiệm cận với cấu trúc đề thi mới nhất của Bộ Giáo dục &amp; Đào tạo. Bên cạnh đó, chúng tôi còn đặc biệt quan tâm đến sự phong phú của nội dung cũng như đa dạng hóa cách thức ra đề nhằm mang đến cho cả học sinh lẫn giáo viên một công cụ đắc lực trong công tác dạy và học hình thức trắc nghiệm.</p>
			          </blockquote>
			        </div>
			    </div>
        	</div>
        </div>
    )
}