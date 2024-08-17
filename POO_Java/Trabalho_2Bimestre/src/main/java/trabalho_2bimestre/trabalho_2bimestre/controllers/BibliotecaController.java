package trabalho_2bimestre.trabalho_2bimestre.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import trabalho_2bimestre.trabalho_2bimestre.model.dto.BibliotecaDTO;
import trabalho_2bimestre.trabalho_2bimestre.model.entities.Biblioteca;
import trabalho_2bimestre.trabalho_2bimestre.service.BibliotecaService;

import java.util.List;

@RestController
@RequestMapping("/bibliotecas")
public class BibliotecaController {

    @Autowired
    private BibliotecaService bibliotecaService;

    @GetMapping
    public List<BibliotecaDTO> getAll() {
        return bibliotecaService.getAll();
    }

    @GetMapping("/{id}")
    public BibliotecaDTO getById(@PathVariable Long id) {
        return bibliotecaService.getById(id);
    }

    @PostMapping
    public BibliotecaDTO create(@RequestBody BibliotecaDTO bibliotecaDTO) {
        return bibliotecaService.create(bibliotecaDTO);
    }

    @PutMapping("/{id}")
    public BibliotecaDTO update(@PathVariable Long id, @RequestBody BibliotecaDTO bibliotecaDTO) {
        return bibliotecaService.update(id, bibliotecaDTO);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        bibliotecaService.delete(id);
    }
}
