package trabalho_2bimestre.trabalho_2bimestre.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import trabalho_2bimestre.trabalho_2bimestre.model.dto.BibliotecaDTO;
import trabalho_2bimestre.trabalho_2bimestre.model.entities.Biblioteca;
import trabalho_2bimestre.trabalho_2bimestre.model.repository.BibliotecaRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BibliotecaService {
    @Autowired
    private BibliotecaRepository bibliotecaRepository;

    public List<BibliotecaDTO> getAll() {
        return bibliotecaRepository.findAll().stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public BibliotecaDTO getById(Long id) {
        return bibliotecaRepository.findById(id).map(this::convertToDto).orElse(null);
    }

    public BibliotecaDTO create(BibliotecaDTO bibliotecaDTO) {
        Biblioteca biblioteca = convertToEntity(bibliotecaDTO);
        biblioteca = bibliotecaRepository.save(biblioteca);
        return convertToDto(biblioteca);
    }

    public BibliotecaDTO update(Long id, BibliotecaDTO bibliotecaDTO) {
        Biblioteca biblioteca = convertToEntity(bibliotecaDTO);
        biblioteca.setId(id);
        biblioteca = bibliotecaRepository.save(biblioteca);
        return convertToDto(biblioteca);
    }

    public void delete(Long id) {
        bibliotecaRepository.deleteById(id);
    }

    private BibliotecaDTO convertToDto(Biblioteca biblioteca) {
        BibliotecaDTO bibliotecaDTO = new BibliotecaDTO();
        bibliotecaDTO.setId(biblioteca.getId());
        bibliotecaDTO.setNome(biblioteca.getNome());
        bibliotecaDTO.setEndereco(biblioteca.getEndereco());
        return bibliotecaDTO;
    }

    private Biblioteca convertToEntity(BibliotecaDTO bibliotecaDTO) {
        Biblioteca biblioteca = new Biblioteca();
        biblioteca.setNome(bibliotecaDTO.getNome());
        biblioteca.setEndereco(bibliotecaDTO.getEndereco());
        return biblioteca;
    }
}
