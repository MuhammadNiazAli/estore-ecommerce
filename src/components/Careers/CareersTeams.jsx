'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Lead Developer',
    photo: 'https://plus.unsplash.com/premium_photo-1705018501151-4045c97658a3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bio: 'Passionate about building scalable web applications and mentoring new devs.',
  },
  {
    name: 'Michael Lee',
    role: 'UX Designer',
    photo: 'https://images.unsplash.com/photo-1590086782792-42dd2350140d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bio: 'Designs intuitive interfaces with a focus on accessibility and user delight.',
  },
  {
    name: 'Emily Davis',
    role: 'Product Manager',
    photo: 'https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bio: 'Drives product vision with customer empathy and agile methodologies.',
  },
  {
    name: 'David Kim',
    role: 'Marketing Lead',
    photo: 'https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bio: 'Leads innovative campaigns that connect brands to audiences.',
  },
  {
    name: 'Anna Patel',
    role: 'QA Engineer',
    photo: 'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // picsum.photos image
    bio: 'Ensures flawless product delivery through rigorous testing.',
  },
  {
    name: 'James Chen',
    role: 'DevOps Engineer',
    photo: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // picsum.photos image
    bio: 'Builds efficient CI/CD pipelines and cloud infrastructure.',
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const CareersTeams = () => {
  return (
    <section className="bg-gray-900 w-full flex justify-center px-4">
      <div className="w-full max-w-[1000px] py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-10 select-none"
        >
          Meet Our Team
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              tabIndex={0}
              className="bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center shadow-md cursor-pointer focus:outline-yellow-400 focus:outline-2 focus:outline-offset-2"
            >
              <div className="relative h-32 w-32 mb-4 rounded-full overflow-hidden border-4 border-yellow-400">
                <Image
                  src={member.photo}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  sizes="(max-width: 768px) 128px, 128px"
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/128?text=No+Image';
                  }}
                  draggable={false}
                />
              </div>
              <h3 className="text-xl font-semibold text-yellow-400">{member.name}</h3>
              <p className="text-yellow-200 italic mb-3">{member.role}</p>
              <p className="text-yellow-100 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersTeams;
