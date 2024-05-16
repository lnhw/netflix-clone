"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LanguageIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { css } from "@emotion/css";
import { Languages, Plus, X } from "lucide-react";
import { ClassNames } from "@emotion/react";
import Link from "next/link";

export default function Home() {
  const fqaSections = [
    {
      question: "Netflix là gì?",
      answer: (
        <>
          <p>
            Netflix là dịch vụ phát trực tuyến mang đến đa dạng các loại chương trình truyền hình, phim, anime, phim tài liệu đoạt giải thưởng và nhiều nội dung khác trên hàng nghìn thiết bị có kết nối Internet.
          </p>
          <br />
          <br />
          <p>
            Bạn có thể xem bao nhiêu tùy thích, bất cứ lúc nào bạn muốn mà không gặp phải một quảng cáo nào – tất cả chỉ với một mức giá thấp hàng tháng.Luôn có những nội dung mới để bạn khám phá và những chương trình truyền hình, phim mới được bổ sung mỗi tuần!
          </p>
        </>
      )
    },
    {
      question: "Tôi phải trả bao nhiêu tiền để xem Netflix?",
      answer: (
        <>
          <p>
            Xem Netflix trên điện thoại thông minh, máy tính bảng, TV thông minh, máy tính xách tay hoặc thiết bị phát trực tuyến, chỉ với một khoản phí cố định hàng tháng.Các gói dịch vụ với mức giá từ 260.000 ₫ đến 70.000 ₫ mỗi tháng.Không phụ phí, không hợp đồng.
          </p>
        </>
      )
    },
    {
      question: "Tôi có thể xem ở đâu?",
      answer: (
        <>
          <p>Xem mọi lúc, mọi nơi.Đăng nhập bằng tài khoản Netflix của bạn để xem ngay trên trang web netflix.com từ máy tính cá nhân, hoặc trên bất kỳ thiết bị nào có kết nối Internet và có cài đặt ứng dụng Netflix, bao gồm TV thông minh, điện thoại thông minh, máy tính bảng, thiết bị phát đa phương tiện trực tuyến và máy chơi game.</p>
          <br />
          <br />
          <p>Bạn cũng có thể tải xuống các chương trình yêu thích bằng ứng dụng trên iOS, Android hoặc Windows 10. Vào phần nội dung đã tải xuống để xem trong khi di chuyển và khi không có kết nối Internet.Mang Netflix theo bạn đến mọi nơi.</p>
        </>
      )
    },
    {
      question: "Làm thế nào để hủy?",
      answer: (
        <>
          <p>
            Netflix rất linh hoạt.Không có hợp đồng phiền toái, không ràng buộc.Bạn có thể dễ dàng hủy tài khoản trực tuyến chỉ trong hai cú nhấp chuột.Không mất phí hủy – bạn có thể bắt đầu hoặc ngừng tài khoản bất cứ lúc nào.
          </p>
        </>
      )
    },
    {
      question: "Tôi có thể xem gì trên Netflix?",
      answer: (
        <>
          <p>
            Netflix có một thư viện phong phú gồm các phim truyện, phim tài liệu, chương trình truyền hình, anime, tác phẩm giành giải thưởng của Netflix và nhiều nội dung khác.Xem không giới hạn bất cứ lúc nào bạn muốn.
          </p>
        </>
      )
    },
    {
      question: "Netflix có phù hợp cho trẻ em không?",
      answer: (
        <>
          <p>
            Trải nghiệm Netflix Trẻ em có sẵn trong gói dịch vụ của bạn, trao cho phụ huynh quyền kiểm soát trong khi các em có thể thưởng thức các bộ phim và chương trình phù hợp cho gia đình tại không gian riêng.
          </p>
          < br />
          <br />
          <p>
            Hồ sơ Trẻ em đi kèm tính năng kiểm soát của cha mẹ(được bảo vệ bằng mã PIN), cho phép bạn giới hạn độ tuổi cho nội dung con mình được phép xem, cũng như chặn những phim hoặc chương trình mà bạn không muốn các em nhìn thấy.
          </p>
        </>
      ),
    }
  ]
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleOpenDetail = (index: number) => {
    setOpenIndex((prevOpenIndex) => {
      // Nếu prevOpenIndex là null (không có details nào đang mở), mở details tại index
      if (prevOpenIndex === null) {
        return index;
      }
      // Nếu prevOpenIndex là index hiện tại, đóng details đó
      if (prevOpenIndex === index) {
        return null;
      }
      // Nếu prevOpenIndex là một index khác, đóng details đó và mở details mới tại index
      return index;
    });
  };
  return (
    <>
      <main className="min-h-screen w-full bg-black" role="main">
        {/* start header */}
        <div className=" overflow-visible h-0 relative z-[1]">
          <header className="min-w-full h-[auto] p-6 lg:py-6 lg:px-8 z-10" role="header">
            <div className="flex items-center justify-between">
              <Image src="/image/Netflix_Logo_PMS.png"
                alt="Netflix Logo"
                width={89}
                height={24}
              />
              <div className="flex items-center space-x-5">
                <Button className="bg-white" variant="secondary" size="sm" role="button">
                  <LanguageIcon className="h-6 w-6 text-black" />
                </Button>
                <Button className=" bg-red-600 no-underline" variant="destructive" role="button">
                  <Link href="/login" className="text-white">
                    Đăng nhập
                  </Link>
                </Button>
              </div>
            </div>
          </header>
        </div>

        {/* end header */}

        <div>
          <div className=" relative flex pt-[7.5rem] pb-8  lg:pt-[158px] lg:pb-[64px]">
            {/* start background */}
            <div className=" absolute inset-0 h-full w-full">
              <div className="relative overflow-hidden h-full w-full">
                <Image
                  className="bg-[linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)]"
                  src="/image/background.jpg"
                  alt="Background Cover"
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  quality={100}
                />
              </div>
            </div>
            <div className="z-[1] flex items-center text-center flex-col mx-auto max-w-[calc(100%-3rem)] lg:my-[8.5rem] lg:mx-[auto]">
              <div className="basis-1/2 z-[1] p-0 w-full">
                <h1 className="text-white text-pretty leading-normal text-3xl lg:text-5xl font-black">
                  Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác
                </h1>
                <p className="mt-4 font-normal text-pretty text-base text-white lg:text-2xl text-center leading-6" >
                  Xem ở mọi nơi. Hủy bất kỳ lúc nào.
                </p>
                <div className="mt-6">
                  <div className="px-6">
                    <div className="mt-4">
                      <h3 className=" text-base text-white text-pretty text-center lg:text-xl font-normal leading-7">
                        Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.
                      </h3>
                      <div className="flex justify-center">
                        <div>
                          <form>
                          </form>
                        </div>
                        <Button className="mt-4 flex items-center justify-between" variant="destructive" role="button" >
                          <span className="text-white">Bắt đầu</span>
                          <ChevronRightIcon className="h-6 w-6 text-white" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end background */}
          </div>
          <div className=" absolute bg-[#232323] h-2 -bottom-2" />
        </div>
        {/*  */}
        <div className="py-14 md:py-[4.5em] lg:py-[4.5rem] flex min-h-[auto] text-center h-full bg-black">
          <div className=" m-auto max-w-[calc(100%-3rem)] md:max-w-[calc(100%-4rem)] lg:max-w-[calc(100%-6rem)] flex items-center flex-col lg:flex-row text-center">
            <div className="basis-1/2 z-[1] lg:pr-2">
              <h2 className="text-white text-[2rem] font-bold lg:text-5xl lg:font-black lg:text-pretty lg:text-left" >
                Thưởng thức trên TV của bạn
              </h2>
              <p className=" text-white text-lg font-normal mt-4 lg:text-2xl lg:text-pretty lg:text-left" >
                Xem trên TV thông minh, Playstation, Xbox, Chromecast, Apple TV, đầu phát Blu-ray và nhiều thiết bị khác.
              </p>
            </div>
            <div className="basis-1/2 z-[1] lg:pl-2">
              <div className="relative overflow-hidden">
                <Image
                  style={{
                    overflowClipMargin: " content-box",
                    overflow: "clip"
                  }}
                  className="object-cover"
                  src="/image/tv.png"
                  alt=""
                  width={579}
                  height={734}
                  sizes="100vw"
                  priority
                  quality={100}
                />
                <div className="-z-10 absolute inset-0 lg:w-[422px] lg:h-[236px] lg:top-[88px] lg:left-[77px]">
                  <video className="" autoPlay muted loop preload="none" playsInline>
                    <source
                      src="/assets/videos/video-tv-0819.m4v"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#232323] h-2" />
        </div>
        {/*  */}

        {/* start download */}
        <div className="py-14 md:py-[4.5em] lg:py-[4.5rem] flex min-h-[auto] text-center h-full bg-black">
          <div className=" m-auto max-w-[calc(100%-3rem)] md:max-w-[calc(100%-4rem)] lg:max-w-[calc(100%-6rem)] flex items-center flex-col lg:flex-row-reverse text-center">
            <div className="basis-1/2 z-[1] w-full">
              <h2 className="text-white text-pretty text-[2rem] font-bold lg:text-5xl lg:font-black lg:text-pretty lg:text-left" >
                Tải xuống nội dung để xem ngoại tuyến
              </h2>
              <p className="text-white text-lg font-normal mt-4 lg:text-2xl lg:text-pretty lg:text-left">
                Lưu lại những nội dung yêu thích một cách dễ dàng và luôn có thứ để xem.
              </p>
              <div className="mt-6" />
            </div>
            <div className="basis-1/2 z-[1] w-full">
              <div className="relative">
                <div className=" h-[382px] w-[286px]">
                  <Image className="object-cover"
                    src="/image/mobile-0819.jpg"
                    alt=""
                    fill
                    sizes="100vw"
                    priority
                    quality={100}
                    style={{
                      overflowClipMargin: "content-box",
                      overflow: "clip",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div className="bg-black flex items-center justify-between min-w-60 w-[60%] px-[0.65rem] py-1 overflow-hidden absolute -translate-x-1/2 -translate-y-1/2 left-1/2 -bottom-0 border-solid border-2 border-gray-400 rounded-lg"
                >
                  <div className="relative w-[34px] h-[48px] lg:w-[57px] lg:h-[80px] mr-2 lg:mr-4 ">
                    <Image className="object-cover"
                      src="/image/boxshot.png"
                      alt="boxshot"
                      fill
                      sizes="100vw"
                      priority
                      quality={100}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="my-[4.8px] text-left">
                    <p className=" text-white text-sm" >Cậu bé mất tích</p>
                    <p className=" text-[#0071eb] text-xs font-normal">Đang tải xuống...</p>
                  </div>
                  <div className=" relative w-[48px] h-[48px] md:w-[48px] md:h-[60px] lg:w-[48px] lg:h-[60px]">
                    <Image className=" object-cover"
                      src="/image/download-icon.gif"
                      alt="download gif"
                      fill
                      sizes="100vw"
                      priority
                      quality={100}
                      unoptimized={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* <Box className="absolute bg-[#232323] h-2 w-full" /> */}
          </div>
        </div>
        {/* end download*/}

        {/* start download */}
        <div className="  relative py-14 md:py-[4.5rem] lg:py-[4.5rem] flex min-h-[auto] text-center h-full bg-black">
          <div className="m-auto max-w-[calc(100%-3rem)] md:max-w-[calc(100%-4rem)] lg:max-w-[calc(100%-6rem)] flex flex-col lg:flex-row items-center text-center">
            <div className="basis-1/2 z-[1] w-full pr-0 lg:pr-2">
              <h2 className="text-white text-pretty text-center text-[2rem] md:text-center font-bold lg:text-5xl lg:font-black lg:text-center">
                Xem ở mọi nơi
              </h2>
              <p className="text-white text-center text-pretty text-lg font-normal mt-4 md:text-center lg:text-2xl lg:text-center">
                Phát trực tuyến không giới hạn phim và chương trình truyền hình trên điện thoại, máy tính bảng, máy tính xách tay và TV.
              </p>
              <div className="mt-6" />
            </div>
            <div className="basis-1/2 z-[1] w-full pl-0 lg:pl-2">
              <div className="relative w-[342px] h-[260px] md:w-[465px] md:h-[349px] lg:w-[579px] lg:h-[438px] sm:inline-block md:inline-block">
                <Image
                  src="/image/device-pile-vn.png"
                  alt="device-pinle-vn"
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                    overflowClipMargin: "content-box",
                    overflow: "clip"
                  }}
                />
                <div style={{
                  zIndex: "-1",
                  overflow: "hidden",
                  position: "absolute",
                  maxHeight: "100%",
                  maxWidth: "100%",
                  width: "65%",
                  height: "75%",
                  top: "46%",
                  left: "50%",
                  transform: "translate(-50%, -50%)"
                }}>
                  <video className="inline-block align-baseline " muted loop autoPlay playsInline>
                    <source
                      src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-vn.m4v"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* <Box className="absolute bg-[#232323] h-2 w-full" /> */}
          </div>
        </div>
        {/*end download  */}
        <div className="py-14 md:py-[4.5em] lg:py-[4.5rem] flex min-h-[auto] text-center h-full bg-black">
          <div className="m-auto sm:max-w-[calc(100%-3rem)] md:max-w-[calc(100%-4rem)] max-w-[calc(100%-6rem)] flex flex-col lg:flex-row-reverse items-center text-center">
            <div className=" basis-1/2 w-full">
              <h2 className="text-white text-pretty text-[2rem] font-bold lg:text-5xl lg:font-black lg:text-left lg:text-pretty">
                Tạo hồ sơ cho trẻ em
              </h2>
              <p className="text-white  text-center text-lg font-normal mt-4 lg:text-2xl lg:text-left lg:text-pretty">
                Đưa các em vào những cuộc phiêu lưu với nhân vật được yêu thích trong một không gian riêng. Tính năng này đi kèm miễn phí với tư cách thành viên của bạn.
              </p>
            </div>
            <div className="basis-1/2 w-full">
              <div className="relative">
                <div className="w-[342px] h-[256px] md:w-[465px] md:h-[349px] lg:w-[579xp] lg:h-[434px]">
                  <Image className="object-cover"
                    src={"/image/AAAABZSTDsJQCe6ndkevSo7c_grcr0f2YJ5pimzeSor98ix4Earwyoza7Liyg8OsNpA2cg3HKSF63qppfkKVP8BTEmcVRAkwa2lhcl5S.png"}
                    alt="kid"
                    fill
                    priority
                    sizes="100vw"
                    quality={100}
                  />
                </div >
              </div>
            </div>
          </div>
        </div>
        {/* FQA */}
        <div className="flex items-center text-center py-[3.5rem] md:py[4.5rem] bg-black">
          <div className="flex flex-col items-center m-auto min-w-[calc(100%-3rem)] md:min-w-[calc(100%-4rem)] lg:min-w-[calc(100%-6rem)]">
            <div>
              <h2 className="text-white text-[32px] font-medium md:text-[48px] md:font-black ">
                Câu hỏi thường gặp
              </h2>

              <div className="w-full flex items-center flex-col py-14">
                {fqaSections.map((qa, index) => (
                  <details className="w-[342px] md:w-[964px] lg:w-[1208px]"
                    key={index}
                  >
                    <summary className="mb-[1px] bg-[#2d2d2d] hover:bg-[#5e5b5b] flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="text-white text-left">
                        {qa.question}
                      </h3>
                      <Plus color="white" className="w-4 h-4" />
                    </summary>
                    <div>
                      <div className="h-max p-6 bg-[#2d2d2d] text-white text-left">{qa.answer}</div>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <footer className="bg-black">
          <div className="my-8 px-6">
            <header className=" md:px-8 lg:my-[4.5rem] lg:px-12 lg:min-w-[calc(83.33333333333334% - 6rem)]">
              <div className="text-white pb-3 flex item-center justify-start">Bạn có câu hỏi? Liên hệ với chúng tôi.</div>
              <div className="mb-3 grid grid-cols-2 sm:gap-1 lg:grid-cols-4 lg:gap-2 *:text-white">
                <span>Câu hỏi thường gặp</span>
                <span> Trung tâm trợ giúp</span>
                <span> Tài khoản</span>
                <span>Trung tâm đa phương tiện</span>
                <span>Quan hệ với nhà đầu tư</span>
                <span> Việc làm</span>
                <span>Các cách xem</span>
                <span>Điều khoản sử dụng</span>
                <span> Quyền riêng tư</span>
                <span> Tùy chọn cookie</span>
                <span>Thông tin doanh nghiệp</span>
                <span>Liên hệ với chúng tôi</span>
                <span> Kiểm tra tốc độ</span>
                <span> Thông báo pháp lý</span>
                <span>Chỉ có trên Netflix</span>
              </div>
              <div>
                <Button className="flex items-center gap-2 px-9 py-1">
                  <Languages />
                  <span className="text-white">
                    Tieng viet
                  </span>
                </Button>
              </div>
              <div className="text-white mt-6 text-sm">
                Netflix Việt Nam
              </div>
            </header>
          </div>
        </footer>
      </main >
    </>
  );
}


