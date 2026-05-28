"use client";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import MyContainer from "../Common/MyContainer";
import { BiSupport } from "react-icons/bi";
import { RiShieldUserLine } from "react-icons/ri";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Why = () => {
  return (
    <div className="py-20 bg-[#EDFCFF]">
      <MyContainer>
        <div className="text-center">
          <h3 className="text-[#0C0B0B] text-2xl font-semibold md:text-4xl">
            Why Choose Wanderlust
          </h3>
          <p className="mt-4 text-[#6C696D] ">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1">
              <div className="text-[#15A1BF]">
                <AiOutlineSafetyCertificate size={35} />
              </div>
              <h3 className="text-[#0C0B0B] mt-4 font-bold text-xl ">
                Safe & Secure
              </h3>
              <p className="text-[#6C696D] mt-3">
                Your safety is our priority with comprehensive travel insurance
                and 24/7 support.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1">
              <div className="text-[#15A1BF]">
                <RiShieldUserLine size={35} />
              </div>
              <h3 className="text-[#0C0B0B] mt-4 font-bold text-xl ">
                Expert Guides
              </h3>
              <p className="text-[#6C696D] mt-3">
                Local experts who bring destinations to life with authentic
                cultural insights.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1">
              <div className="text-[#15A1BF]">
                <BiSupport size={35} />
              </div>
              <h3 className="text-[#0C0B0B] mt-4 font-bold text-xl ">
                24/7 Support
              </h3>
              <p className="text-[#6C696D] mt-3">
                Round-the-clock customer service to assist you wherever your
                journey takes you.
              </p>
            </div>
          </motion.div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Why;
