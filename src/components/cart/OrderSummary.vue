<template>

    <section class="flex flex-col items-center mb-8
        justify-center w-screen h-56 bg-white-25">

        <div class="w-96 h-max border rounded-3xl p-8">

            <h3 class="text-lg font-semibold pb-2">

                Resumo do pedido

            </h3>

            <div class="flex flex-col gap-2 mb-4 font-medium">


                <span class="flex justify-between border-t pt-2">

                    Produtos

                    <span>

                        R$12,00

                    </span>

                </span>

                <span class="flex justify-between border-t pt-2">

                    Entrega

                    <span>

                        R$5,00

                    </span>

                </span>

                <span class="flex text-xl justify-between border-t pt-2">

                    Total

                    <span>

                        R$17,00

                    </span>

                </span>

            </div>

            <button class="relative w-full px-8 py-2 rounded-3xl bg-white isolation-auto
            z-10 border-2 border-yellow-350 before:absolute before:w-full before:transition-all
            before:duration-700 before:hover:w-full before:-right-full before:hover:right-0
            before:rounded-full  before:bg-yellow-350 before:-z-10  before:aspect-square
            before:hover:scale-150 overflow-hidden before:hover:duration-700 font-semibold">

                Finalizar pedido

            </button>

        </div>

    </section>

</template>