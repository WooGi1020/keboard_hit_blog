import FooterNav from "@/components/footer/FooterNav";

function Footer() {
  return (
    <footer className="w-full h-[150px] p-5 flex flex-col justify-center">
      <div
        className="max-w-[982px] px-[16px] mx-auto w-full
      flex flex-col gap-2 items-center"
      >
        <p className="text-lg">
          코딩기의 <span className="text-chart-2">Next.js</span> 블로그: 키보드 두들기며 먹고살기
          ver.1
        </p>
        <FooterNav />
        <p className="text-sm">(C) 2024. 코딩기. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
