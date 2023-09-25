import React, { useState } from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  const [personalModal, setPersonalModal] = useState<boolean>(false);
  const [serviceModal, setServiceModal] = useState<boolean>(false);

  return (
    <FooterWrapper>
      <LeftContent>
        <ButtonWrapper>
          <PersonalInfo
            onClick={() => {
              setPersonalModal(true);
              document.body.style.overflow = "hidden";
            }}
          >
            개인정보 처리약관
          </PersonalInfo>
          <Service
            onClick={() => {
              setServiceModal(true);
              document.body.style.overflow = "hidden";
            }}
          >
            서비스 이용약관
          </Service>
        </ButtonWrapper>
        <PhoneWrapper>
          <PhoneContent>
            <div>사업자등록번호</div>
            <p>123-12-123456</p>
          </PhoneContent>
          <PhoneContent>
            <div>통신판매업신고</div>
            <p>123-강남-123456</p>
          </PhoneContent>
          <PhoneContent>
            <div>문의전화</div>
            <p>070-0000-0000</p>
          </PhoneContent>
        </PhoneWrapper>
      </LeftContent>
      <RightContent>
        <TetraTitle>테트라 셀프코칭</TetraTitle>
        <TetraRights>ⓒ 테트라.All Rights Reserved.</TetraRights>
      </RightContent>
      {personalModal && (
        <ModalBackground>
          <ModalWrapper>
            <ModalTitle>개인정보처리방침</ModalTitle>
            <CloseImage
              src="/images/exit.png"
              alt="Close"
              width={29}
              height={29}
              onClick={() => {
                setPersonalModal(false);
                document.body.style.overflow = "auto";
              }}
            />
            <ModalContent>
              &lt; 테트라 셀프코칭 &gt;('https:// '이하 '테트라 셀프코칭')은(는)
              「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고
              이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여
              다음과 같이 개인정보 처리방침을 수립·공개합니다.
              <br />
              <br />
              ○ 이 개인정보처리방침은 2023년 2월 1부터 적용됩니다.
              <br />
              <br />
              <br />
              제1조(개인정보의 처리 목적)
              <br />
              <br />
              &lt; 테트라 셀프코칭 &gt;('https:// '이하 '테트라 셀프코칭')은(는)
              다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는
              개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이
              변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를
              받는 등 필요한 조치를 이행할 예정입니다.
              <br />
              <br />
              1. 홈페이지 회원가입 및 관리
              <br />
              <br />
              ①&lt;테트라 셀프코칭's &gt;('http:// 이하'테트라 셀프코칭's)은
              다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적
              이외의 용도로는 이용하지 않습니다. -고객 가입의사 확인, 고객에
              대한 서비스 제공에 따른 본인 식별. 인증, 회원자격 유지. 관리, 물품
              또는 서비스 공급에 따른 금액 결제, 물품 또는 서비스의 공급.배송 등
              목적으로 개인정보를 처리합니다.
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              제2조(개인정보의 처리 및 보유 기간)
              <br />
              <br />
              ① &lt; 테트라 셀프코칭 &gt;은(는) 법령에 따른 개인정보
              보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은
              개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
              <br />
              <br />
              ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
              <br />
              <br />
              1.&lt;홈페이지 회원가입 및 관리&gt;
              <br />
              <br />
              &lt;홈페이지 회원가입 및 관리&gt;와 관련한 개인정보는 수집.이용에
              관한 동의일로부터&lt;회원가입 해지시까지&gt;까지 위 이용목적을
              위하여 보유.이용됩니다.
              <br />
              <br />
              보유근거 : &lt;테트라 셀프코칭's&gt;(http://'이하 '테트라
              셀프코칭's)는 정보주체로부터 개인정보를 수집할 때 동의 받은
              개인정보 보유 이용기간 또는 법령에 따른 개인정보 보유이용기간
              내에서 개인정보를 처리,보유합니다
              <br />
              <br />
              관련법령 : 계약 또는 청약철회 등에 관한 기록 : 5년
              <br />
              <br />
              예외사유 :
              <br />
              <br />
              <br />
              <br />
              <br />
              제3조(처리하는 개인정보의 항목)
              <br />
              <br />
              ① &lt; 테트라 셀프코칭 &gt;은(는) 다음의 개인정보 항목을 처리하고
              있습니다.
              <br />
              <br />
              1&lt; 홈페이지 회원가입 및 관리 &gt;
              <br />
              <br />
              필수항목 : 성별
              <br />
              <br />
              선택항목 :
              <br />
              <br />
              <br />
              <br />
              <br />
              제4조(개인정보의 파기절차 및 파기방법)
              <br />
              <br />
              <br />
              ① &lt; 테트라 셀프코칭 &gt; 은(는) 개인정보 보유기간의 경과,
              처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당
              개인정보를 파기합니다.
              <br />
              <br />
              ② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나
              처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를
              계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의
              데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
              <br />
              1. 법령 근거 :
              <br />
              2. 보존하는 개인정보 항목 : 계좌정보, 거래날짜
              <br />
              <br />
              ③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.
              <br />
              1. 파기절차
              <br />
              &lt; 테트라 셀프코칭 &gt; 은(는) 파기 사유가 발생한 개인정보를
              선정하고, &lt; 테트라 셀프코칭 &gt; 의 개인정보 보호책임자의
              승인을 받아 개인정보를 파기합니다.
              <br />
              <br />
              2. 파기방법
              <br />
              <br />
              전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을
              사용합니다
              <br />
              <br />
              <br />
              <br />
              <br />
              제5조(정보주체와 법정대리인의 권리·의무 및 그 행사방법에 관한
              사항)
              <br />
              <br />
              <br />
              <br />
              ① 정보주체는 테트라 셀프코칭에 대해 언제든지 개인정보
              열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
              <br />
              <br />
              ② 제1항에 따른 권리 행사는테트라 셀프코칭에 대해 「개인정보
              보호법」 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX)
              등을 통하여 하실 수 있으며 테트라 셀프코칭은(는) 이에 대해 지체
              없이 조치하겠습니다.
              <br />
              <br />
              ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은
              자 등 대리인을 통하여 하실 수 있습니다.이 경우 “개인정보 처리
              방법에 관한 고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을
              제출하셔야 합니다.
              <br />
              <br />
              ④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조
              제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수
              있습니다.
              <br />
              <br />
              ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집
              대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
              <br />
              <br />
              ⑥ 테트라 셀프코칭은(는) 정보주체 권리에 따른 열람의 요구,
              정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가
              본인이거나 정당한 대리인인지를 확인합니다.
              <br />
              <br />
              <br />
              <br />
              <br />
              제6조(개인정보의 안전성 확보조치에 관한 사항)
              <br />
              <br />
              &lt; 테트라 셀프코칭 &gt;은(는) 개인정보의 안전성 확보를 위해
              다음과 같은 조치를 취하고 있습니다.
              <br />
              <br />
              1. 정기적인 자체 감사 실시
              <br />
              개인정보 취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체
              감사를 실시하고 있습니다.
              <br />
              <br />
              2. 개인정보 취급 직원의 최소화 및 교육
              <br />
              개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여
              개인정보를 관리하는 대책을 시행하고 있습니다.
              <br />
              <br />
              3. 내부관리계획의 수립 및 시행
              <br />
              개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고
              있습니다.
              <br />
              <br />
              4. 해킹 등에 대비한 기술적 대책
              <br />
              &lt;테트라 셀프코칭&gt;('테트라 셀프코칭')은 해킹이나 컴퓨터
              바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여
              보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터
              접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및
              차단하고 있습니다.
              <br />
              <br />
              5. 개인정보의 암호화
              <br />
              이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어,
              본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화
              하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고
              있습니다.
              <br />
              <br />
              6. 접속기록의 보관 및 위변조 방지
              <br />
              개인정보처리시스템에 접속한 기록을 최소 1년 이상 보관, 관리하고
              있으며,다만, 5만명 이상의 정보주체에 관하여 개인정보를 추가하거나,
              고유식별정보 또는 민감정보를 처리하는 경우에는 2년이상 보관,
              관리하고 있습니다. 또한, 접속기록이 위변조 및 도난, 분실되지
              않도록 보안기능을 사용하고 있습니다.
              <br />
              <br />
              7. 개인정보에 대한 접근 제한
              <br />
              개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의
              부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한
              조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단
              접근을 통제하고 있습니다.
              <br />
              <br />
              8. 문서보안을 위한 잠금장치 사용
              <br />
              개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가 있는 안전한
              장소에 보관하고 있습니다.
              <br />
              <br />
              9. 비인가자에 대한 출입 통제
              <br />
              개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에 대해
              출입통제 절차를 수립, 운영하고 있습니다.
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              제7조(개인정보를 자동으로 수집하는 장치의 설치·운영 및 그 거부에
              관한 사항)
              <br />
              <br />
              <br />
              <br />
              테트라 셀프코칭 은(는) 정보주체의 이용정보를 저장하고 수시로
              불러오는 ‘쿠키(cookie)’를 사용하지 않습니다.
              <br />
              <br />
              제8조 (개인정보 보호책임자에 관한 사항)
              <br />
              <br />
              <br />
              ① 테트라 셀프코칭 은(는) 개인정보 처리에 관한 업무를 총괄해서
              책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제
              등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
              <br />
              <br />
              ▶ 개인정보 보호책임자
              <br />
              <br />
              성명 :테트라 셀프코칭
              <br />
              <br />
              직책 :박정민
              <br />
              <br />
              직급 :박정민
              <br />
              <br />
              연락처 :01056747720, bagmunsu21@gmail.com,
              <br />
              <br />
              ※ 개인정보 보호 담당부서로 연결됩니다.
              <br />
              <br />
              <br />
              <br />
              ▶ 개인정보 보호 담당부서
              <br />
              <br />
              부서명 :테트라 셀프코칭
              <br />
              <br />
              담당자 :박정민
              <br />
              <br />
              연락처 :01056747720, ,<br />
              <br />
              ② 정보주체께서는 테트라 셀프코칭 의 서비스(또는 사업)을
              이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리,
              피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로
              문의하실 수 있습니다. 테트라 셀프코칭 은(는) 정보주체의 문의에
              대해 지체 없이 답변 및 처리해드릴 것입니다.
              <br />
              <br />
              제9조(개인정보의 열람청구를 접수·처리하는 부서)
              <br />
              정보주체는 ｢개인정보 보호법｣ 제35조에 따른 개인정보의 열람 청구를
              아래의 부서에 할 수 있습니다.
              <br />
              &lt; 테트라 셀프코칭 &gt;은(는) 정보주체의 개인정보 열람청구가
              신속하게 처리되도록 노력하겠습니다.
              <br />
              <br />▶ 개인정보 열람청구 접수·처리 부서 부서명 : 테트라 셀프코칭
              담당자 : 박정민 연락처 : , , 제10조(정보주체의 권익침해에 대한
              구제방법) 정보주체는 개인정보침해로 인한 구제를 받기 위하여
              개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에
              분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타
              개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기
              바랍니다. 1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972
              (www.kopico.go.kr) 2. 개인정보침해신고센터 : (국번없이) 118
              (privacy.kisa.or.kr) 3. 대검찰청 : (국번없이) 1301 (www.spo.go.kr)
              4. 경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)
              「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의
              정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대
              하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는
              이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을
              청구할 수 있습니다. ※ 행정심판에 대해 자세한 사항은
              중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기
              바랍니다. 제11조(개인정보 처리방침 변경) ① 이 개인정보처리방침은
              2023년 2월 1부터 적용됩니다. ② 이전의 개인정보 처리방침은 아래에서
              확인하실 수 있습니다.
            </ModalContent>
          </ModalWrapper>
        </ModalBackground>
      )}
      {serviceModal && (
        <ModalBackground>
          <ModalWrapper>
            <ModalTitle>서비스 이용약관</ModalTitle>
            <CloseImage
              src="/images/exit.png"
              alt="Close"
              width={29}
              height={29}
              onClick={() => {
                setServiceModal(false);
                document.body.style.overflow = "auto";
              }}
            />
            <ModalContent>
              <ModalContent>
                &lt; 테트라 셀프코칭 &gt;('https:// '이하 '테트라
                셀프코칭')은(는) 「개인정보 보호법」 제30조에 따라 정보주체의
                개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할
                수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을
                수립·공개합니다.
                <br />
                <br />
                ○ 이 개인정보처리방침은 2023년 2월 1부터 적용됩니다.
                <br />
                <br />
                <br />
                제1조(개인정보의 처리 목적)
                <br />
                <br />
                &lt; 테트라 셀프코칭 &gt;('https:// '이하 '테트라
                셀프코칭')은(는) 다음의 목적을 위하여 개인정보를 처리합니다.
                처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지
                않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」
                제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할
                예정입니다.
                <br />
                <br />
                1. 홈페이지 회원가입 및 관리
                <br />
                <br />
                ①&lt;테트라 셀프코칭's &gt;('http:// 이하'테트라 셀프코칭's)은
                다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적
                이외의 용도로는 이용하지 않습니다. -고객 가입의사 확인, 고객에
                대한 서비스 제공에 따른 본인 식별. 인증, 회원자격 유지. 관리,
                물품 또는 서비스 공급에 따른 금액 결제, 물품 또는 서비스의
                공급.배송 등 목적으로 개인정보를 처리합니다.
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                제2조(개인정보의 처리 및 보유 기간)
                <br />
                <br />
                ① &lt; 테트라 셀프코칭 &gt;은(는) 법령에 따른 개인정보
                보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은
                개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                <br />
                <br />
                ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
                <br />
                <br />
                1.&lt;홈페이지 회원가입 및 관리&gt;
                <br />
                <br />
                &lt;홈페이지 회원가입 및 관리&gt;와 관련한 개인정보는
                수집.이용에 관한 동의일로부터&lt;회원가입 해지시까지&gt;까지 위
                이용목적을 위하여 보유.이용됩니다.
                <br />
                <br />
                보유근거 : &lt;테트라 셀프코칭's&gt;(http://'이하 '테트라
                셀프코칭's)는 정보주체로부터 개인정보를 수집할 때 동의 받은
                개인정보 보유 이용기간 또는 법령에 따른 개인정보 보유이용기간
                내에서 개인정보를 처리,보유합니다
                <br />
                <br />
                관련법령 : 계약 또는 청약철회 등에 관한 기록 : 5년
                <br />
                <br />
                예외사유 :
                <br />
                <br />
                <br />
                <br />
                <br />
                제3조(처리하는 개인정보의 항목)
                <br />
                <br />
                ① &lt; 테트라 셀프코칭 &gt;은(는) 다음의 개인정보 항목을
                처리하고 있습니다.
                <br />
                <br />
                1&lt; 홈페이지 회원가입 및 관리 &gt;
                <br />
                <br />
                필수항목 : 성별
                <br />
                <br />
                선택항목 :
                <br />
                <br />
                <br />
                <br />
                <br />
                제4조(개인정보의 파기절차 및 파기방법)
                <br />
                <br />
                <br />
                ① &lt; 테트라 셀프코칭 &gt; 은(는) 개인정보 보유기간의 경과,
                처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이
                해당 개인정보를 파기합니다.
                <br />
                <br />
                ② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나
                처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를
                계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의
                데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
                <br />
                1. 법령 근거 :
                <br />
                2. 보존하는 개인정보 항목 : 계좌정보, 거래날짜
                <br />
                <br />
                ③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.
                <br />
                1. 파기절차
                <br />
                &lt; 테트라 셀프코칭 &gt; 은(는) 파기 사유가 발생한 개인정보를
                선정하고, &lt; 테트라 셀프코칭 &gt; 의 개인정보 보호책임자의
                승인을 받아 개인정보를 파기합니다.
                <br />
                <br />
                2. 파기방법
                <br />
                <br />
                전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을
                사용합니다
                <br />
                <br />
                <br />
                <br />
                <br />
                제5조(정보주체와 법정대리인의 권리·의무 및 그 행사방법에 관한
                사항)
                <br />
                <br />
                <br />
                <br />
                ① 정보주체는 테트라 셀프코칭에 대해 언제든지 개인정보
                열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
                <br />
                <br />
                ② 제1항에 따른 권리 행사는테트라 셀프코칭에 대해 「개인정보
                보호법」 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX)
                등을 통하여 하실 수 있으며 테트라 셀프코칭은(는) 이에 대해 지체
                없이 조치하겠습니다.
                <br />
                <br />
                ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은
                자 등 대리인을 통하여 하실 수 있습니다.이 경우 “개인정보 처리
                방법에 관한 고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을
                제출하셔야 합니다.
                <br />
                <br />
                ④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조
                제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수
                있습니다.
                <br />
                <br />
                ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가
                수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수
                없습니다.
                <br />
                <br />
                ⑥ 테트라 셀프코칭은(는) 정보주체 권리에 따른 열람의 요구,
                정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가
                본인이거나 정당한 대리인인지를 확인합니다.
                <br />
                <br />
                <br />
                <br />
                <br />
                제6조(개인정보의 안전성 확보조치에 관한 사항)
                <br />
                <br />
                &lt; 테트라 셀프코칭 &gt;은(는) 개인정보의 안전성 확보를 위해
                다음과 같은 조치를 취하고 있습니다.
                <br />
                <br />
                1. 정기적인 자체 감사 실시
                <br />
                개인정보 취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체
                감사를 실시하고 있습니다.
                <br />
                <br />
                2. 개인정보 취급 직원의 최소화 및 교육
                <br />
                개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화
                하여 개인정보를 관리하는 대책을 시행하고 있습니다.
                <br />
                <br />
                3. 내부관리계획의 수립 및 시행
                <br />
                개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고
                있습니다.
                <br />
                <br />
                4. 해킹 등에 대비한 기술적 대책
                <br />
                &lt;테트라 셀프코칭&gt;('테트라 셀프코칭')은 해킹이나 컴퓨터
                바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여
                보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터
                접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및
                차단하고 있습니다.
                <br />
                <br />
                5. 개인정보의 암호화
                <br />
                이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고
                있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송
                데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도
                보안기능을 사용하고 있습니다.
                <br />
                <br />
                6. 접속기록의 보관 및 위변조 방지
                <br />
                개인정보처리시스템에 접속한 기록을 최소 1년 이상 보관, 관리하고
                있으며,다만, 5만명 이상의 정보주체에 관하여 개인정보를
                추가하거나, 고유식별정보 또는 민감정보를 처리하는 경우에는
                2년이상 보관, 관리하고 있습니다. 또한, 접속기록이 위변조 및
                도난, 분실되지 않도록 보안기능을 사용하고 있습니다.
                <br />
                <br />
                7. 개인정보에 대한 접근 제한
                <br />
                개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의
                부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한
                조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단
                접근을 통제하고 있습니다.
                <br />
                <br />
                8. 문서보안을 위한 잠금장치 사용
                <br />
                개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가 있는 안전한
                장소에 보관하고 있습니다.
                <br />
                <br />
                9. 비인가자에 대한 출입 통제
                <br />
                개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에
                대해 출입통제 절차를 수립, 운영하고 있습니다.
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                제7조(개인정보를 자동으로 수집하는 장치의 설치·운영 및 그 거부에
                관한 사항)
                <br />
                <br />
                <br />
                <br />
                테트라 셀프코칭 은(는) 정보주체의 이용정보를 저장하고 수시로
                불러오는 ‘쿠키(cookie)’를 사용하지 않습니다.
                <br />
                <br />
                제8조 (개인정보 보호책임자에 관한 사항)
                <br />
                <br />
                <br />
                ① 테트라 셀프코칭 은(는) 개인정보 처리에 관한 업무를 총괄해서
                책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제
                등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                <br />
                <br />
                ▶ 개인정보 보호책임자
                <br />
                <br />
                성명 :테트라 셀프코칭
                <br />
                <br />
                직책 :박정민
                <br />
                <br />
                직급 :박정민
                <br />
                <br />
                연락처 :01056747720, bagmunsu21@gmail.com,
                <br />
                <br />
                ※ 개인정보 보호 담당부서로 연결됩니다.
                <br />
                <br />
                <br />
                <br />
                ▶ 개인정보 보호 담당부서
                <br />
                <br />
                부서명 :테트라 셀프코칭
                <br />
                <br />
                담당자 :박정민
                <br />
                <br />
                연락처 :01056747720, ,<br />
                <br />
                ② 정보주체께서는 테트라 셀프코칭 의 서비스(또는 사업)을
                이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리,
                피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로
                문의하실 수 있습니다. 테트라 셀프코칭 은(는) 정보주체의 문의에
                대해 지체 없이 답변 및 처리해드릴 것입니다.
                <br />
                <br />
                제9조(개인정보의 열람청구를 접수·처리하는 부서)
                <br />
                정보주체는 ｢개인정보 보호법｣ 제35조에 따른 개인정보의 열람
                청구를 아래의 부서에 할 수 있습니다.
                <br />
                &lt; 테트라 셀프코칭 &gt;은(는) 정보주체의 개인정보 열람청구가
                신속하게 처리되도록 노력하겠습니다.
                <br />
                <br />▶ 개인정보 열람청구 접수·처리 부서 부서명 : 테트라
                셀프코칭 담당자 : 박정민 연락처 : , , 제10조(정보주체의
                권익침해에 대한 구제방법) 정보주체는 개인정보침해로 인한 구제를
                받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원
                개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수
                있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는
                아래의 기관에 문의하시기 바랍니다. 1. 개인정보분쟁조정위원회 :
                (국번없이) 1833-6972 (www.kopico.go.kr) 2. 개인정보침해신고센터
                : (국번없이) 118 (privacy.kisa.or.kr) 3. 대검찰청 : (국번없이)
                1301 (www.spo.go.kr) 4. 경찰청 : (국번없이) 182
                (ecrm.cyber.go.kr) 「개인정보보호법」제35조(개인정보의 열람),
                제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의
                규정에 의한 요구에 대 하여 공공기관의 장이 행한 처분 또는
                부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이
                정하는 바에 따라 행정심판을 청구할 수 있습니다. ※ 행정심판에
                대해 자세한 사항은 중앙행정심판위원회(www.simpan.go.kr)
                홈페이지를 참고하시기 바랍니다. 제11조(개인정보 처리방침 변경) ①
                이 개인정보처리방침은 2023년 2월 1부터 적용됩니다. ② 이전의
                개인정보 처리방침은 아래에서 확인하실 수 있습니다.
              </ModalContent>
            </ModalContent>
          </ModalWrapper>
        </ModalBackground>
      )}
    </FooterWrapper>
  );
};

const ModalContent = styled.div`
  background-color: #f3f3f3;
  border-radius: 15px;
  padding: 40px 43px;
  width: calc(100% - 112px);
  height: calc(100% - 300px);
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #696a6f;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 18px 18px;
    width: calc(100% - 30px);
    height: 100%;
  }
`;

const CloseImage = styled.img`
  position: absolute;
  top: 28px;
  right: 28px;
  cursor: pointer;
`;

const ModalTitle = styled.div`
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  font-size: 36px;
  color: #1a1f27;
  display: inline-flex;
  width: 100%;
  justify-content: center;
  margin-top: 63px;
  margin-bottom: 39px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-top: 22px;
    margin-bottom: 21px;
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const ModalWrapper = styled.div`
  position: relative;
  width: 63%;
  height: calc(100% - 256px);
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  z-index: 3;
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 15px;
    width: 80%;
    height: 90%;
  }
`;

const TetraRights = styled.div`
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;

  @media (max-width: 768px) {
    margin-top: 15px;
    margin-bottom: 70px;
    font-size: 12px;
  }
`;

const TetraTitle = styled.div`
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const PhoneContent = styled.div`
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  div {
    font-family: Pretendard, sans-serif;
    font-weight: 400;
    font-size: 14px;
  }
  p {
    font-family: Pretendard, sans-serif;
    font-weight: 700;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    gap: 20px;
    div {
      font-size: 12px;
    }
    p {
      font-size: 12px;
    }
  }
`;

const PhoneWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const Service = styled.div`
  font-family: Pretendard, sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const PersonalInfo = styled.div`
  font-family: Pretendard, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #f2e8f9;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ButtonWrapper = styled.div`
  display: inline-flex;
  gap: 21px;

  @media (max-width: 768px) {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
    margin-bottom: 27px;
  }
`;

const LeftContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const RightContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
`;

const FooterWrapper = styled.div`
  width: 100%;
  height: 319px;
  background-color: #1a1f27;
  display: inline-flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    height: 390px;
  }
`;

export default Footer;
