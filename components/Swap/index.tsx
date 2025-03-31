

const Swap = () => {
    return (
        <div className=" flex lg:flex-row flex-col justify-center gap-4 mt-20 px-10">
            <div className="bg-modal-back h-[430px] w-[450px] rounded-xl">

            </div>
            <div className="bg-modal-back h-[430px] w-[450px] rounded-xl px-4 py-4">
                <button className="bg-swip-btn-color px-2 py-2 text-base rounded-3xl font-bold">
                    Swaip says:
                </button>
                <div className="text-center text-xl font-bold mt-5">
                This token has its minting feature turned on, and the team wallet holds 25% of the total supply, while the holder count is currently only 5. The liquidity provided for this token is merely $193, meaning that even a small investment can cause a significant price change. Considering these factors, it would be advisable to avoid risking your ETH into this coin.
                </div>
            </div>
        </div>
    )
}

export default Swap;
