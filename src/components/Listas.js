import Item from './Item'
function Listas() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1945}/>
                <Item marca="Volksvagem" ano_lancamento={2003}/>
                <Item marca="Bugatti"/>
                <Item marca="Chevrolet" ano_lancamento={1993}/>
                <Item/>
            </ul>
        </>
    )
}
export default Listas