/**
 * classe que representa o pedido
 */
export class PedidoVenda {

    /* Atributos */
    /* Identificador do pedido */
    private idPedido: number = 0;
    /* identificador do carro */
    private idCarro: number;
    /* identificador do cliente */
    private idCliente: number;
    /* data do pedido */
    private dataPedido: Date;
    /* valor do pedido */
    private valorPedido: number;

         /**
     * Construtor da classe Cliente
     * 
     * @param idPedido id do pedido
     * @param idCarro id do carro
     * @param idCliente id do cliente
     * @param dataPedido data do pedido
     * @param valorPedido valor do pedido
     */
    
    
    constructor(
        idCarro: number,
        idCliente: number,
        dataPedido: Date,
        valorPedido:number,
    ) {
        this.idCarro = idCarro;
        this.idCliente = idCliente;
        this.dataPedido = dataPedido;
        this.valorPedido = valorPedido;
    }
    
        /* Métodos get e set */
    /**
     * Recupera o identificador do pedido
     * @returns o identificador do pedido
     */
    public getIdPedido(): number {
        return this.idPedido;
    }

    /**
     * Atribui um valor ao identificador do Pedido
     * @param idPedido novo identificado do Pedido
     */
    public setIdPedido(idPedido: number): void {
        this.idPedido = idPedido;
    }

    /**
     * Retorna o idCarro do pedido.
     *
     * @returns {number} o idCarro do pedido.
     */
    public getidCarro(): number {
        return this.idCarro;
    }
    
    /**
     * Define O idCarro do pedido.
     * 
     * @param idCarro - o idCarro do pedido a ser definido.
     */
    public setidCarro(idCarro: number): void {
        this.idCarro = idCarro;
    }

        /**
     * Retorna o idCliente do pedido.
     *
     * @returns {number} o idCliente do pedido.
     */
    public getidCliente(): number {
        return this.idCliente;
    }
    
    /**
     * Define o idCliente do pedido.
     * 
     * @param idCliente - o idCliente do pedido a ser definido.
     */
    public setidCliente(idCliente: number): void {
        this.idCliente = idCliente;
    }

    /**
     * Retorna o data do pedido.
     *
     * @returns {Date} o data do pedido.
     */
    public getdataPedido(): Date {
        return this.dataPedido;
    }
    
    /**
     * Define o data do pedido.
     * 
     * @param dataPedido - o data do pedido a ser definido.
     */
    public setdataPedido(dataPedido: Date): void {
        this.dataPedido = dataPedido;
    }

    /**
     * Retorna o data do pedido.
     *
     * @returns {number} o valor do pedido 
     */
    public getvalorPedido(): number {
        return this.valorPedido;
    }
    
    /**
     * Define o valor do pedido.
     * 
     * @param valorPedido - o valor do pedido a ser definido.
     */
    public setvalorPedido(valorPedido: number): void {
        this.valorPedido = valorPedido;
    }

}

