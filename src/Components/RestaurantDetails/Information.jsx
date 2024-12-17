import MenuCard from "./MenuCard";

// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Button,
//   useDisclosure,
// } from "@nextui-org/react";
const Information = () => {
  const socialIcons = [
    {
      src: "/fb.png",
    },
    {
      src: "/instra.png",
    },
    {
      src: "/tiktok.png",
    },
    {
      src: "/wp.png",
    },
        ];
        //  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <section className="w-[80%] mx-auto mt-12 sm:mt-24 mb-8">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4 ">
          <div className="space-y-12">
            <h1 className="font-lexend font-semibold text-xl sm:text-[34px]  leading-7 sm:leading-[42px]">
              More informations
            </h1>
            {/* <Button onPress={onOpen}>click me</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Modal Title
                    </ModalHeader>
                    <ModalBody>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor
                        quam.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor
                        quam.
                      </p>
                      <p>
                        Magna exercitation reprehenderit magna aute tempor
                        cupidatat consequat elit dolor adipisicing. Mollit dolor
                        eiusmod sunt ex incididunt cillum quis. Velit duis sit
                        officia eiusmod Lorem aliqua enim laboris do dolor
                        eiusmod. Et mollit incididunt nisi consectetur esse
                        laborum eiusmod pariatur proident Lorem eiusmod et.
                        Culpa deserunt nostrud ad veniam.
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Action
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal> */}
            <div className="space-y-6">
              <div className="flex gap-3 items-center">
                <img src="/spon.png" alt="" />
                <button
                  className="border-b border-gray-800 font-roboto text-xl leading-6 text-EerieBlack"
                >
                  See the menu
                </button>
              </div>
              <div className="flex gap-3 items-center">
                <img src="/call.png" alt="" />
                <p className="font-roboto text-xl leading-6 text-EerieBlack">
                  +847 87 37 29 01
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <img src="/location.png" alt="" />
                <p className="font-roboto text-xl leading-6 text-EerieBlack">
                  Singapour, Bishan
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <img src="/clock.png" alt="" />
                <p className="font-roboto text-xl leading-6 text-EerieBlack">
                  7j/7, 08:00 - 22:00
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <img src="/link.png" alt="" />
                <a
                  href="#"
                  className="border-b border-gray-800 font-roboto text-xl leading-6 text-EerieBlack"
                >
                  www.bellaitalia.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {socialIcons.map((icon, index) => (
                <a key={index} href="#">
                  <img src={icon.src} alt="" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <img src="/secondMap.png" alt="" />
          </div>
        </div>
      </section>
      <hr className="w-full h-[1px] bg-[#DCDCDC]" />
    </>
  );
};

export default Information;
