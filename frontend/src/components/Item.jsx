import React from "react";

const Item = () => {
  return (
    <div className="flex flex-col gap-4">
      <a href="/" className="">
        <img
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-1698951062824460065/original/2e4b9e6c-8fad-439f-b7e7-535fa35777cd.jpeg"
          alt="imagem da acomodação"
          className="aspect-square rounded-2xl object-cover"
        />
      </a>

      <div>
        <h3 className="text-xl font-semibold">Cabo Frio, Rio de Janeiro</h3>
        <p className="truncate text-gray-500">
          Chalé Infinity Serra: Onde o Infinito é Sua Vista Viva o
          extraordinário em Aiuruoca. De frente para o Pico do Papagaio, nosso
          refúgio na Mantiqueira une design e natureza. Conforto: Hidro
          relaxante, cama premium e cozinha completa. Diferencial: Banheiro com
          chuveiro duplo e vista integrada. A Experiência: Uma varanda que
          emoldura o pôr do sol mais épico da região e noites sob o braço da Via
          Láctea. O silêncio que convida à presença. Não é apenas estadia, é
          reconexão. Reserve esse momento agora.
        </p>
      </div>

      <div>
        <p>
          <span className="font-semibold">R$ 550</span> por noite
        </p>
      </div>
    </div>
  );
};

export default Item;
