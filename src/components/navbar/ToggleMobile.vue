<template>

    <label>

        <div class="flex flex-col items-center
        justify-center h-10 cursor-pointer w-9">

            <input class="hidden peer" type="checkbox" />

            <span class="w-[50%] h-[2px] bg-white-25 rounded-sm transition-all duration-300
            origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]">
            </span>

            <span class="w-[50%] h-[2px] bg-white-25 rounded-md transition-all
            duration-300 origin-center peer-checked:hidden">
            </span>

            <span class="w-[50%] h-[2px] bg-white-25 rounded-md transition-all duration-300
            origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]">
            </span>

        </div>

    </label>

</template>