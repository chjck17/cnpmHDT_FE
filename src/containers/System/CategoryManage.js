import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './CategoryManage.scss';
import CreateCategoryModal from './CreateCategoryModal';
import { emitter} from "../../utils/emitter";
import {getAllCategories,createNewCategory} from '../../services/categoryService'
class CategoryManage extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories : [],
            isOpenCreateCategoryModal: false
        }
    }


    async componentDidMount() {
        await this.getAllCategoriesFromReact()
        
    }

    toggleCategoryModal = () =>{
        this.setState ({
            isOpenCreateCategoryModal: !this.state.isOpenCreateCategoryModal,
        })
    }

    getAllCategoriesFromReact = async () => {
        let response = await getAllCategories();
        if(response && response.result){
            this.setState({
                categories : response.data
            })
        } 
    }

    handleAddNewCategory = () => {
        this.setState ({
            isOpenCreateCategoryModal: true,
        })
    }

    createNewCategoryFromReact = async (data) => {
        let response = await createNewCategory(data);
        if(response && response.result){
            await this.getAllCategoriesFromReact();
            this.setState({
                isOpenCreateCategoryModal: false,
            })
            emitter.emit('EVENT_CLEAR_MODAL_DATA')
        }else{
            alert(response.data.message)
        }
    }


    render() {
        let categories =this.state.categories.data
        return (
            <div className="users-container">
                <CreateCategoryModal
                    isOpen={this.state.isOpenCreateCategoryModal}
                    toggleFromParent={this.toggleCategoryModal}
                    createNewCategoryFromReact={this.createNewCategoryFromReact}
                />
                <div 
                    style={{fontSize : 30 , marginBottom : 30, marginTop : 20, color : 'red'}} 
                    className='title text-center'
                >Manage Category
                </div>
                <div className='mx-1'>
                    <button className="btn btn-primary px-3" onClick={()=>this.handleAddNewCategory()}>
                        <i class="fa fa-plus" aria-hidden="true"></i>
                        Add New Category
                    </button>
                </div>
                <div className='users-table mt-3 mx-1'>
                    <table id="customers">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Ordering</th>
                        <th>Parent Category Id</th>
                        <th>Actions</th>
                    </tr>
                    {categories && categories.map((category,index) =>(
                        <tr key={category.id} className="divClass">
                            <td>{category.id}</td>
                            <td>{category.categoryName}</td>
                            <td>{category.categoryDescription}</td>
                            <td>{category.categoryOrdering}</td>
                            <td>{category.parentId? category.parentId:'NULL'}</td>
                            <td>
                                <button className='btn-actions edit'><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                <button className='btn-actions delete'><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                            </td>
                        </tr>
                    ))}
                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryManage);
