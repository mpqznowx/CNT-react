

export default function ContactMainTab() {
  return (
    <>
      <section className="location-section">
        <div className="location-wrap">
          <div className="location-map" id="googleMap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.2645889005694!2d126.87904191165617!3d37.478082129078444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9e1d2ba06e45%3A0xad0d5fed717a1145!2z7IaU66Oo7Yuw7Iqk!5e0!3m2!1sko!2skr!4v1774245103447!5m2!1sko!2skr"
              style={{border:0}}
              
              loading="lazy"
              
            ></iframe>
          </div>
          <div className="location-info">
            <div className="location-group">
              <h3 className="location-title">본사 오시는 길</h3>

              <div className="info-item">
                <div className="info-label">
                  <img src="/assets/images/contact/map.png" alt="주소" />
                  <span>주소</span>
                </div>
                <p className="info-text">
                  서울시 금천구 가산디지털1로 145, 806호
                </p>
              </div>

              <div className="info-item">
                <div className="info-label">
                  <img src="/assets/images/contact/call.png" alt="연락처" />
                  <span>연락처</span>
                </div>
                <p className="info-text">(+82) 02-6951-5536</p>
              </div>

              <div className="info-item">
                <div className="info-label">
                  <img src="/assets/images/contact/mail.png" alt="이메일" />
                  <span>이메일</span>
                </div>
                <p className="info-text">info@solutiscnt.co.kr</p>
              </div>
              <div className="info-item">
                <div className="info-label">
                  <img src="/assets/images/contact/traffic.png" alt="" />
                  <span>지하철</span>
                </div>
                <p className="info-text line">
                  7호선 가산디지털단지역 7번출구에서 300m, 도보 5분 이내
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
