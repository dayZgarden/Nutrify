import React from 'react';
import seen from '../assets/seen.svg';

const Seen = () => {
    return (
<div class=" py-24  sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
    <img className='aspect-square z-[1]' src={seen} alt="" />

    </dl>
  </div>
</div>
    );
}

export default Seen;
