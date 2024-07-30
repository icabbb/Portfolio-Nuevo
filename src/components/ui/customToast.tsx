import React from 'react';

type CustomToastProps = {
  message: string;
  icon: string;
  
};

const CustomToast = ({ message, icon}: CustomToastProps) => {
 

  return (
    <div className='relative overflow-hidden rounded-xl p-[1px] backdrop-blur-3x border-secondaryC-light dark:border-secondaryC-dark' style={{ width: 'fit-content', border: "1px solid" }}>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#10b981_0%,#393BB2_50%,#10b981_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#393BB2_50%,#3b82f6_100%)]' />
      <div
        className="inline-flex items-center justify-center rounded-xl px-3 py-1 text-sm font-medium backdrop-blur-3xl bg-primaryC-light dark:bg-primaryC-dark text-primaryC-dark dark:text-primaryC-light"
      >
        <span style={{ marginRight: '8px' }}>{icon}</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default CustomToast;
