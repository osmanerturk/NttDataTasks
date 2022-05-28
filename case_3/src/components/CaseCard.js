import React from "react";
import './CaseCard.css'

function CaseCard({item}) {
  console.log(item)

  
  return (
    <div>
        <div
          className="container mx-auto flex flex-col"
        >
          <div className="p-2">
            <div className="p-4 border border-slate-400 rounded relative">
              <div
                className="grid grid-cols-4 items-center" style={{minHeight:'100px'}}
              >
                <div className="w-full aspect-4/1 border-r border-slate-400 px-2 col-span-1">
                  <img
                    className="w-full h-full object-contain"
                    alt="icon"
                    src={item.ImagePath}
                  />
                </div>

                <div className="px-4 flex flex-col col-span-2">
                  <span className="font-bold">{item.FirmName}</span>
                  <div>
                    <span className="font-medium">{item.ProductDesc}</span>
                    <sup className="fa fa-circle-question text-blue-600">{item.popoverContent ? item.popoverContent[0].Description : ""}</sup>
                  </div>
                </div>

                <div className="px-4 sm:pt-0 pt-4  sm:-top-2 relative block sm:text-right sm:col-span-1 col-span-4">
                  <div className="text-slate-500 text-sm">
                    <span className="line-through">
                      {item?.QuotaInfo.HasDiscount ? `Peşin ${item.Cash} TL` : ""}
                    </span>
                  </div>
                  <div className="font-bold text-xl">
                    {item?.QuotaInfo.HasDiscount
                      ? item.QuotaInfo.PremiumWithDiscount
                      : item.Cash} TL
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 right-6">
                <button className="border border-blue-500 uppercase text-white bg-blue-500 w-40 text-center p-1 font-bold text-xs">
                  Satın Al
                </button>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
}

export default CaseCard;
