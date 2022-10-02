import React from 'react'

function Customers() {

  const [importState, setImport] = useState(false);
  const [exportState, setExport] = useState(false);

  const toggleImportState = () => {
    setImport(!importState)
  }

  const toggleExportState = () => {
    setExport(!exportState)
  }
    
  return (
    <div className='hero__wrapper'>
    <div className="hero__header">
      <div className="header__title">
        <h1>Products</h1>
      </div>

      <div className='header__options'>
        <div className="button button-grey" onClick={toggleImportState}>Import</div>
        <div className="button button-purple"  onClick={toggleExportState}>Export</div>         
      </div>
    </div>
   
    <div className="products__table">
    <table width={100}>
         <thead>
           <tr>
             <th>id</th>
             <th>Name</th>
             <th>Email</th>
           </tr>
         </thead>
      
      {photos.map((photo) => 
          <ProductsRow data={photo} />
      )}

      </table> 
      
    </div>
  </div>
  )
}

export default Customers