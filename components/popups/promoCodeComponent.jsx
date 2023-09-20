import Image from "next/image";
const promoCodeComponent = (props) => {
    return (
        <div className="h-screen top-0 left-0 w-screen absolute z-10">
            <div className="absolute w-full bottom-0 h-1/3 flex justify-center overflow-y-hidden">
                <div
                    className={`${"translate-y-0 opacity-100"} relative h-96 ease-in-out transition-all transform duration-3000 w-1/4`}>
                    <Image className="object-contain " fill alt="" src={"/assets/promo_code.png"} />
                    <div className="absolute z-10 left-60 top-44 text-slate-100 text-2xl font-semibold font-sans">
                        {props.promoCode}
                    </div>
                </div>
                <style jsx>{`
                    .duration-3000 {
                        transition-duration: 100ms;
                    }
                `}</style>
            </div>
        </div>
    );
};

export default promoCodeComponent;
