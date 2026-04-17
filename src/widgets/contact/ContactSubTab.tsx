

export default function ContactSubTab() {
  return (
    <>
      <section className="location-section">
        <div className="location-wrap">
          <div className="location-map" id="googleMap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.5156925886713!2d127.72116241167147!3d37.87162100645805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3562e67f80dc14af%3A0xdc743a28033dd968!2z6rCV7JuQ7Yq567OE7J6Q7LmY64-EIOy2mOyynOyLnCDqs7Xsp4DroZwgMzg3IDTsuLU!5e0!3m2!1sko!2skr!4v1774245239546!5m2!1sko!2skr"
              loading="lazy"
              style={{border: 0}}
            ></iframe>
          </div>

          <div className="location-info">
            <div className="location-group">
              <h3 className="location-title">춘천사무실 오시는 길</h3>

              <div className="info-item">
                <div className="info-label">
                  <img src="/assets/images/contact/map.png" alt="주소" />
                  <span>주소</span>
                </div>
                <p className="info-text">
                  강원특별자치도 춘천시 공지로 387, 4층
                </p>
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
                  <span>경춘선 [남춘천역] 이용시</span>
                </div>
                <p className="info-text line">도보 15분 소요</p>
                <p className="info-text line">택시 5분 소요</p>
                <p className="info-text line">1번 출구 버스정류장에서 마을버스 남산1, 남산2, 신동2, 신동3번 / 지선 15번 버스 이용, 남부사거리 하차 후 도보 90m</p>
              </div>
              <div className="info-item">
                <div className="info-label">
                  <img src="/assets/images/contact/bus.png" alt="" />
                  <span>고속버스 이용시</span>
                </div>
                <p className="info-text line">[춘천시외버스터미널] 육교 건너 시외버스터미널 정류장에서 마을버스 남면2, 남면3번 이용, 남부사거리 하차 후 도보 90m</p>
              </div>
            </div>

            
          </div>
        </div>
      </section>
    </>
  );
}
