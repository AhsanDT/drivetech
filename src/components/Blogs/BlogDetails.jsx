import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Image from "next/image";
import Link from "next/link";

const BlogDetails = ({ id, DATA }) => {
  return (
    <Layout>
      <section className="py-[50px] px-[30px] md:px-[130px]  relative top-[50px]">
        {DATA.map((data) => {
          return (
            <div className="pt-[50px] pb-[92px]">
              <div className=" font-jakarta">
                <Link href="/blogs">
                  <span className="text-[rgb(140,140,140)] text-[14px] cursor-pointer">
                    Blog &nbsp;/&nbsp;&nbsp;
                  </span>
                </Link>
                <span className="text-[#1D356A] text-[14px] font-bold">
                  {data.content}
                </span>
              </div>
              <div>
                <div className="pt-[20px] md:pt-[77px] flex flex-col gap-y-[21px] justify-center md:items-center">
                  <div className="flex items-center  mt-[21px]">
                    <div className=" bg-[#3C3C3C] w-[68px] h-[2px]"></div>
                    <div className=" bg-[#3C3C3C] w-[12px] h-[12px] rounded-full"></div>
                  </div>
                  <h1 className="text-[32px] font-oswald font-bold text-[#00000S0] lg:text-[48px]  md:text-center">
                    {data.content}
                  </h1>
                </div>
                <div className="img-container py-[48px]">
                  <Image src={data.blogImage} alt="img" />
                </div>
                <div className=" md:px-[120px]  flex flex-col gap-y-[32px] font-jakarta">
                  <h3 className="text-[32px] text-[#3F3F3F] font-oswald font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas, suscipit!
                  </h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sapiente iusto delectus accusantium rerum deserunt libero
                    fugiat doloribus, repellendus reiciendis laborum minima
                    dolorum, quod ex quo rem deleniti iste omnis voluptas, ea
                    sint quae perspiciatis amet! Laborum id adipisci libero
                    itaque earum soluta enim reprehenderit error facilis commodi
                    incidunt, dolorem nam velit. Reiciendis praesentium
                    similique officia laboriosam molestias sunt facere, quasi
                    iusto illum incidunt magni asperiores doloremque in ea error
                    voluptatibus voluptatem beatae at! Labore iusto ipsa, velit
                    molestias nulla mollitia omnis fugit reprehenderit? Modi
                    impedit maxime possimus unde eos distinctio, quam dicta eum.
                    Eligendi itaque facere provident? Doloremque, commodi minus
                    nisi a libero, saepe id quaerat adipisci voluptate qui iusto
                    placeat! Veritatis maiores nobis perspiciatis sequi cumque
                    pariatur dolorum repellendus nisi exercitationem id, ducimus
                    officiis, aperiam itaque aliquid natus, laboriosam nihil
                    repellat velit odio distinctio temporibus consequuntur.
                    Numquam quidem omnis quibusdam sunt illum laudantium
                    nesciunt quas, porro itaque, velit enim explicabo iste error
                    molestias exercitationem quia doloribus voluptate! Debitis,
                    cumque corporis, mollitia iste culpa earum odit enim
                    excepturi minus, dolor quidem tenetur pariatur laudantium
                    omnis fuga eaque libero quis provident quisquam. Repellendus
                    magni aliquam expedita, ipsa saepe sunt veniam sed fugit
                    sint. Laboriosam aliquid eos aspernatur perferendis dolorum
                    quas magnam voluptatem nam consequatur mollitia ullam,
                    provident quia similique, laborum ut excepturi beatae enim,
                    commodi maxime reprehenderit fugiat exercitationem aliquam
                    voluptate corrupti. Sequi nisi alias harum temporibus ipsam,
                    rem delectus voluptates laborum nulla ipsa. Incidunt
                    obcaecati illo fugit delectus ea asperiores minus
                    necessitatibus porro sapiente velit magnam voluptates cum
                    beatae placeat iure modi maxime, ipsa ex rerum quam nulla
                    repellendus tenetur? Autem id molestiae alias, aliquid ut
                    qui perferendis mollitia ratione, illo, veritatis recusandae
                    unde culpa ex dolor est atque! Odit saepe vero adipisci
                    minima libero reiciendis placeat rerum sit aspernatur quia,
                    temporibus iste, quod similique, itaque neque amet quas
                    eveniet modi cupiditate? Doloremque ullam necessitatibus
                    distinctio sint, neque quo possimus. Obcaecati, veritatis
                    possimus. Earum harum eum exercitationem, itaque architecto
                    aliquam voluptatibus, saepe, iure asperiores necessitatibus
                    vero ipsum perspiciatis magnam fugiat nisi molestiae ducimus
                    reprehenderit. Inventore quae, molestiae unde amet a minima
                    aspernatur, obcaecati quod eos officiis, maiores similique
                    excepturi itaque nostrum culpa natus? Provident officia
                    doloribus sequi beatae a sint dolorum sapiente corrupti.
                    Cupiditate dolorem sint voluptas dolorum repellat eius
                    libero necessitatibus ut, facilis laboriosam temporibus sit
                    adipisci vitae! Eveniet deleniti dignissimos non,
                    accusantium obcaecati consequuntur officia iste sequi, odit
                    molestias, magni quod vel enim quasi reprehenderit similique
                    suscipit asperiores.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export default BlogDetails;
