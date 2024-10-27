import express from 'express'
    import contactCtrl from '../controllers/contact.controller.js' 
    const router = express.Router()
    router.route('/api/contacts').________(contactCtrl.create)
    router.route('/api/contacts').get(contactCtrl._______)
    router.param('contactId', contactCtrl.contactByID)
    router.route('/api/contacts/:contactId').get(contactCtrl.read)
    router.route('/api/contacts/:contactId').________(contactCtrl.update)
    router.route('/api/contacts/:contactId').________(contactCtrl.remove)

    export default router

