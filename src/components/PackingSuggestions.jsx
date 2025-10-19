import React from 'react'
import { Link } from 'react-router-dom';

function PackingSuggestions() {
  return (
   <main className="px-4 sm:px-6 lg:px-8 py-10 flex flex-1 justify-center">
    <div className="flex flex-col max-w-6xl mx-auto flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <h1 className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">YOUR PACKING PLAN</h1>
      </div>
      <div className="pb-3">
        <div className="flex border-b border-[#325567] px-4 gap-8">
          <a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-white pb-[13px] pt-4" href="#">
            <p className="text-white text-sm font-bold leading-normal tracking-[0.015em]">Day 1</p>
          </a>
          <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#92b7c9] pb-[13px] pt-4" href="#">
            <p className="text-[#92b7c9] text-sm font-bold leading-normal tracking-[0.015em]">Day 2</p>
          </a>
          <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#92b7c9] pb-[13px] pt-4" href="#">
            <p className="text-[#92b7c9] text-sm font-bold leading-normal tracking-[0.015em]">Day 3</p>
          </a>
          <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#92b7c9] pb-[13px] pt-4" href="#">
            <p className="text-[#92b7c9] text-sm font-bold leading-normal tracking-[0.015em]">Day 4</p>
          </a>
          <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#92b7c9] pb-[13px] pt-4" href="#">
            <p className="text-[#92b7c9] text-sm font-bold leading-normal tracking-[0.015em]">Day 5</p>
          </a>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-stretch justify-between gap-4 rounded-lg">
          <div className="flex flex-col gap-1 flex-[2_2_0px]">
            <p className="text-white text-base font-bold leading-tight">Sunny</p>
            <p className="text-[#92b7c9] text-sm font-normal leading-normal">25°C, 10% chance of rain</p>
          </div>
          <img 
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkKIqIb2rDerP3_FOwpKJ11_XuAFr8IPu4BM72yaUVDZ_7F0xMmd7y9CJ1u7SvpNWxoQNf8yJ664aw9CmKC7RcT-Mi3qMluZkOkKxLuwVB5BRHNBA58IgmvJVyczi367dBHbX74zB9q98jXQn-lzsebm5uUpqCNjly3s8ZdwJ0AvyhmfroHcXjVhnvsAys2J6IXNoGt9WOo82y8CAMZmG6d01iFzzu_oLAQ-265n652_gEFESePcDmlLzDdU6ZU8lQGgQYdNVi"
            alt="weather image" 
          />
        </div>
      </div>
      <div className="p-4 @container">
        <div className="flex flex-col items-stretch justify-start rounded-lg @xl:flex-row @xl:items-start">
          <img 
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMkxbAm6PC-i3XHWih7As11wnwANwng_AYiE5fBKiv6KSvUkOkCJYYDWm9OsFpR_UGsnUVg0jyhZwNobfeeEIccQfgygh7UDfYMxBo_JL70R2psnYxISQnaKCGtEGAKZWuwBz1ztAs80ySnR1AIMFVMzJh46NC-1FApCtYkS9afZQHvKvsCBoU_AKCOZLXvhJst2q1dCno6AeKj0JjJW13LIHxuazIsy2zG4xudH-tHzLphv7_5pZfZHWhTX2d6YEgcsPWCeTs"
            alt="outfit image"
          />
          <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
            <p className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Outfit Recommendation</p>
            <div className="flex items-end gap-3 justify-between">
              <p className="text-[#92b7c9] text-base font-normal leading-normal">Here's what to wear for a day of exploring the city.</p>
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-primary text-white text-sm font-medium leading-normal"
              >
                <span className="truncate">View Outfit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-stretch justify-between gap-4 rounded-lg">
          <div className="flex flex-col gap-1 flex-[2_2_0px]">
            <p className="text-white text-base font-bold leading-tight">Justification</p>
            <p className="text-[#92b7c9] text-sm font-normal leading-normal">
              This outfit is perfect for a day of sightseeing. It's comfortable, stylish, and appropriate for the weather.
            </p>
          </div>
          <img 
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGBPpD8A-osqRGeOxTY5hs1dll2CN_TBzTyteZtgaCbGzGBeK1BDhCbkJ-EIsJgYNGssB4CukY_cO7bamMcEYwdCDCL2d96eu5YUlZa_DPNt70_suGIdpObzwKs9CFJKdMszxjyTGqNWTW1rrD9o-o7jSKRwOviGeAAXzBZDRnw7ZJxomB0_Igf62cws3eaysOXxHweiTa6wM2DjK1PxKDgWWzD4J2W-42in7TaD4Ls0wVrC0mrEdeE1VE_xXOzdg8WtFew0K-"
            alt="justification image" 
          />
        </div>
      </div>
      <div className="flex px-4 py-3 justify-center">
        <Link 
          to="/checklist"
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">FINAL PACKING CHECKLIST</span>
        </Link>
      </div>
    </div>
   </main>
  )
}

export default PackingSuggestions;