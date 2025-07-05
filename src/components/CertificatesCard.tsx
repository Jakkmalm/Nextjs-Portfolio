// src/components/CertificateCard.tsx
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CertificateCardProps {
  title: string;
  image: string;
  issuedBy: string;
  date: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  title,
  image,
  issuedBy,
  date,
}) => {
  return (
    <motion.article
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="relative h-40 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Issued by {issuedBy}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
          {date}
        </p>
      </div>
    </motion.article>
  );
};

export default CertificateCard;
