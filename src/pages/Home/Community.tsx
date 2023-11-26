import "./css/Community.css";
import aws_group from "../../assets/img/partner_aws_user_group.png";
import hashicorp_group from "../../assets/img/partner_hashicorp_group.png";
import blockchain_group from "../../assets/img/partner_blockchain.png";
import { motion } from "framer-motion";

const Community = () => {
  return (
    <div className="community">
      <motion.h2
        initial={{ opacity: 0, transform: "translateY(50%)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
        Community and <span>Partners</span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, transform: "translateY(50%)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}>
        <img src={aws_group} alt="aws" />
        <img src={hashicorp_group} alt="hashicorp" />
        <img src={blockchain_group} alt="blockchain" />
      </motion.div>
    </div>
  );
};

export default Community;
